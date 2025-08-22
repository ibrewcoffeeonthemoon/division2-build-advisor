from __future__ import annotations
from typing import TYPE_CHECKING, Type, TypeVar

from agent.build.result.handler import Formula, Breakdown, Gradients, Delta
from agent.build.result.stats import Stats
if TYPE_CHECKING:
    from agent.build import Build
from agent.build.damage import _ComputeGraphManager


T = TypeVar('T', bound=_ComputeGraphManager)


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

    @property
    def delta(self) -> Delta:
        return Delta(self._build, self._cls)
