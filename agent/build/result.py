from __future__ import annotations
from dataclasses import asdict
from agent.utils import merge_text_side_by_side
from typing import TYPE_CHECKING, Type, TypeVar, cast
if TYPE_CHECKING:
    from agent.build import Build
from agent.build.damage import _ComputeGraphManager, Output


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
        print(f'Stats:')

        def text(m: _ComputeGraphManager) -> str:
            stats = m.stats
            t = f'{stats.weapon_name}:\n'
            for k, v in asdict(stats.data).items():
                t += f'{k}: {v:.0%}\n'
            return t

        txt = merge_text_side_by_side(
            text(self._managers[0]),
            text(self._managers[1]),
        )
        print(txt)


class Formula(_ResultHandler):
    def __call__(self) -> None:
        def text(m: _ComputeGraphManager) -> str:
            f = m.formula
            d = f.data
            t = 'Multipliers:\n'
            t += f'{f.weapon_name}:\n'
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
        def text(m: _ComputeGraphManager) -> str:
            b = m.breakdown
            d = b.data

            def joining(ls: list[Output.Breakdown.Data.Attribute]) -> str:
                return ' + '.join([
                    f'{a.name} {a.expected_value:.1%}'
                    for a in ls])

            def presenting(ls: list[Output.Breakdown.Data.Attribute]) -> str:
                content = joining(ls)
                if len(content) == 0:
                    return ''
                return f' x (1 + {content})\n'

            t = 'Breakdown:\n'
            t += f'{b.weapon_name}:\n'
            t += f'DMG {d.DMG:,.0f} = BaseDamage {d.BaseDamage:,.0f}\n'
            t += presenting(d.WD)
            t += presenting(d.TWD)
            t += presenting(d.AMP1)
            t += presenting(d.AMP2)
            t += presenting(d.AMP3)
            t += (
                f' x (1 + CHC {d.CHC:.1%} x CHD {d.CHD:.1%} '
                f'+ HS {d.HS:.1%} x HSC {d.HSC:.1%})\n'
            )
            t += presenting(d._DTA_DTH)
            t += presenting(d.DTTOOC)

            return t

        txt = '\n'.join([
            text(self._managers[0]),
            text(self._managers[1]),
        ])

        print(txt)


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
