from agent.utils import merge_text_side_by_side
from typing import TYPE_CHECKING, Type, TypeVar
if TYPE_CHECKING:
    from agent.build import Build
from agent.build.damage import _ComputeGraphManager


T = TypeVar('T', bound=_ComputeGraphManager)


class Stats:
    def __init__(
        self,
        build: 'Build',
        manager: Type[T],
    ) -> None:
        self._build = build
        self._manager = manager

    def __call__(self) -> None:
        txt1 = self._build._graph_manager(self._manager, 0).stats
        txt2 = self._build._graph_manager(self._manager, 1).stats

        txt = merge_text_side_by_side(txt1, txt2)

        print(txt)


class Gradients:
    def __init__(
        self,
        build: 'Build',
        manager: Type[T],
    ) -> None:
        self._build = build
        self._manager = manager

    def __call__(self) -> None:
        txt1 = self._build._graph_manager(self._manager, 0).gradients
        txt2 = self._build._graph_manager(self._manager, 1).gradients

        txt = merge_text_side_by_side(txt1, txt2)

        print(txt)


class Result:
    def __init__(
        self,
        build: 'Build',
        cls: Type[T],
    ) -> None:
        self._build = build
        self._cls = cls

    @property
    def stats(self) -> Stats:
        return Stats(self._build, self._cls)

    @property
    def gradients(self) -> Gradients:
        return Gradients(self._build, self._cls)
