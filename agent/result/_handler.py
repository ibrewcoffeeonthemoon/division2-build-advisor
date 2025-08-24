from __future__ import annotations

from abc import ABC, abstractmethod
from typing import TYPE_CHECKING, Type, TypeVar, cast

from agent.utils import merge_text_side_by_side

if TYPE_CHECKING:
    from agent.build import Build

from agent.damage import _ComputeGraphManager

T = TypeVar('T', bound=_ComputeGraphManager)


class _ResultHandler(ABC):
    SEP_TAG = '<line />'
    SEP = f'{SEP_TAG}\n'

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

    @abstractmethod
    def text(self, weapon_id: int) -> str:
        ...

    def __call__(self, weapon_id: int | None = None) -> None:
        if weapon_id is not None:
            print(self.text(weapon_id))
            return
        #
        print(merge_text_side_by_side(
            self.text(0),
            self.text(1),
        ))
