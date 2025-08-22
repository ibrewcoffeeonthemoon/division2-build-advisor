from __future__ import annotations
from agent.utils import merge_text_side_by_side
from typing import TYPE_CHECKING, Type, TypeVar
if TYPE_CHECKING:
    from agent.build import Build
from agent.build.damage import _ComputeGraphManager


T = TypeVar('T', bound=_ComputeGraphManager)


class _ResultHandler:
    def __init__(
        self,
        build: Build,
        manager: Type[T],
    ) -> None:
        self._build = build
        self._managers = (
            build._graph_manager(manager, 0),
            build._graph_manager(manager, 1),
        )


class Stats(_ResultHandler):
    def __call__(self) -> None:
        txt = merge_text_side_by_side(
            self._managers[0].stats,
            self._managers[1].stats,
        )

        print(txt)


class Formula(_ResultHandler):
    def __call__(self) -> None:
        txt = merge_text_side_by_side(
            self._managers[0].formula,
            self._managers[1].formula,
        )

        print(txt)


class Breakdown(_ResultHandler):
    def __call__(self) -> None:
        txt = '\n'.join([
            self._managers[0].breakdown,
            self._managers[1].breakdown,
        ])

        print(txt)


class Gradients(_ResultHandler):
    def __call__(self) -> None:
        txt = merge_text_side_by_side(
            self._managers[0].gradients,
            self._managers[1].gradients,
        )

        print(txt)


class Result:
    def __init__(
        self,
        build: Build,
        cls: Type[T],
    ) -> None:
        self._build = build
        self._cls = cls

    @property
    def stats(self) -> Stats:
        return Stats(self._build, self._cls)

    @property
    def formula(self) -> Formula:
        return Formula(self._build, self._cls)

    @property
    def breakdown(self) -> Breakdown:
        return Breakdown(self._build, self._cls)

    @property
    def gradients(self) -> Gradients:
        return Gradients(self._build, self._cls)
