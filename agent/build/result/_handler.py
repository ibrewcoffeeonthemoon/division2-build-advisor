from __future__ import annotations
from typing import TYPE_CHECKING, Type, TypeVar, cast
if TYPE_CHECKING:
    from agent.build import Build
from agent.build.damage import _ComputeGraphManager


T = TypeVar('T', bound=_ComputeGraphManager)


class _ResultHandler:
    def __init__(
        self,
        build: Build,
        cls: Type[T],
    ) -> None:
        self._build = build
        self._managers = (
            cast(T, build._graph_manager(cls, 0)),
            cast(T, build._graph_manager(cls, 1)),
        )
