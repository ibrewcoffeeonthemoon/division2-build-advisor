from __future__ import annotations

from functools import cached_property
from typing import TYPE_CHECKING, Type, TypeVar

from agent.result.breakdown import Breakdown
from agent.result.formula import Formula
from agent.result.gradients.delta import Delta
from agent.result.gradients.gradients import Gradients
from agent.result.stats import Stats

if TYPE_CHECKING:
    from agent.build import Build

from agent.damage import _ComputeGraphManager

T = TypeVar('T', bound=_ComputeGraphManager)


class Result:
    def __init__(
        self,
        build: Build,
        cls: Type[T],
    ) -> None:
        self._build = build
        self._cls = cls

    # result handlers
    @cached_property
    def stats(self) -> Stats:
        return Stats(self._build, self._cls)

    @cached_property
    def formula(self) -> Formula:
        return Formula(self._build, self._cls)

    @cached_property
    def breakdown(self) -> Breakdown:
        return Breakdown(self._build, self._cls)

    @cached_property
    def gradients(self) -> Gradients:
        return Gradients(self._build, self._cls)

    @cached_property
    def delta(self) -> Delta:
        return Delta(self._build, self._cls)
