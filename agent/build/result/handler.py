from __future__ import annotations
from agent.utils import merge_text_side_by_side
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


class Gradients(_ResultHandler):
    def __call__(self) -> None:
        def text(m: _ComputeGraphManager) -> str:
            g = m.gradients
            t = f'{g.name} Gradients:\n'
            for items in g.items_ls:
                for item in items.items:
                    t += f'{" "*2}{item.name}:\n'
                    for attr in item.attrs:
                        if attr.grad is not None:
                            name = f'{attr.name} {attr.value:.1%}'
                            t += f'{" "*4}{name:20}: {attr.grad:{g.grad_format}}\n'
            return t

        txt = merge_text_side_by_side(
            text(self._managers[0]),
            text(self._managers[1]),
        )

        print(txt)


class Delta(_ResultHandler):
    def __call__(self) -> None:
        def text(m: _ComputeGraphManager) -> str:
            g = m.gradients
            t = f'{g.name} Delta:\n'
            for items in g.items_ls:
                for item in items.items:
                    t += f'{" "*2}{item.name}:\n'
                    for attr in item.attrs:
                        if attr.grad is not None:
                            name = f'{attr.name} {attr.value:.1%}'
                            delta = attr.value * attr.grad
                            t += f'{" "*4}{name:20}: {delta:{g.grad_format}}\n'
            return t

        txt = merge_text_side_by_side(
            text(self._managers[0]),
            text(self._managers[1]),
        )

        print(txt)
