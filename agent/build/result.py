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


class Stats(_ResultHandler):
    def __call__(self) -> None:
        print('Stats:')
        for result in self._managers:
            for k, v in result.stats:
                print(f'  {k}: {v:.0%}')


class Formula(_ResultHandler):
    def __call__(self) -> None:
        def text(m: _ComputeGraphManager) -> str:
            d = m.formula
            t = 'Multipliers:\n'
            t += f'   DMGx    {d.DMGx:.3f}\n'
            t += f' = WD      {d.WD:.3f}\n'
            t += f' x TWD     {d.TWD:.3f}\n'
            t += f' x AMP1    {d.AMP1:.3f}\n'
            t += f' x AMP2    {d.AMP2:.3f}\n'
            t += f' x AMP3    {d.AMP3:.3f}\n'
            t += f' x Crit_HS {d.Crit_HS:.3f}\n'
            t += f' x DTA_DTH {d.DTA_DTH:.3f}\n'
            t += f' x DTTOOC  {d.DTTOOC:.3f}\n'
            return t

        txt = merge_text_side_by_side(
            text(self._managers[0]),
            text(self._managers[1]),
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
