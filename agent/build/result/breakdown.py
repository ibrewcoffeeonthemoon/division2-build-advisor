from __future__ import annotations
from agent.build.damage import Output
from agent.build.result._handler import _ResultHandler


class Breakdown(_ResultHandler):
    def text(self, weapon_id: int = 0) -> str:
        m = self._managers[weapon_id]
        b = m.breakdown
        d = b.data

        def joining(ls: list[Output.Breakdown.Data.Attribute], char: str) -> str:
            return char.join([
                f'{a.name} {a.expected_value:.1%}'
                for a in ls])

        def presenting(ls: list[Output.Breakdown.Data.Attribute], char: str = '\n      + ') -> str:
            content = joining(ls, char)
            if len(content) == 0:
                return ''
            return f' x (1 + {content})\n'

        t = self.SEP
        t += 'Breakdown:\n'
        t += self.SEP
        t += f'{b.weapon_name}:\n'
        t += self.SEP
        t += f' BaseDamage {d.BaseDamage:,.0f}\n'
        t += presenting(d.WD)
        t += presenting(d.TWD)
        t += presenting(d.AMP1)
        t += presenting(d.AMP2)
        t += presenting(d.AMP3)
        t += f' x (1 + CHC {d.CHC:.1%} x CHD {d.CHD:.1%}\n'
        t += f'      + HS {d.HS:.1%} x HSC {d.HSC:.1%})\n'
        t += presenting(d._DTA_DTH)
        t += presenting(d.DTTOOC)
        t += self.SEP
        t += f' = DMG {d.DMG:,.0f}\n'
        t += self.SEP

        return t.replace(
            self.SEP_TAG,
            '-'*max(len(s) for s in t.splitlines())
        )
