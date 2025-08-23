from __future__ import annotations
from dataclasses import asdict
from agent.build.result._handler import _ResultHandler


class Stats(_ResultHandler):
    def text(self, weapon_id: int = 0) -> str:
        m = self._managers[weapon_id]
        s = m.stats

        t = self.SEP
        t += 'Stats:\n'
        t += self.SEP
        t += f'{s.weapon_name}:\n'
        t += self.SEP
        for k, v in asdict(s.data).items():
            t += f'{k}: {v:.0%}\n'
        t += self.SEP

        return t.replace(
            self.SEP_TAG,
            '-'*max(len(s) for s in t.splitlines())
        )
