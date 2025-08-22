from __future__ import annotations
from agent.build.damage import _ComputeGraphManager, Output
from agent.build.result._handler import _ResultHandler


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
