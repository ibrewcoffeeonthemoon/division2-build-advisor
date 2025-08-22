from __future__ import annotations
from dataclasses import asdict
from agent.utils import merge_text_side_by_side
from agent.build.damage import _ComputeGraphManager
from agent.build.result._handler import _ResultHandler


class Stats(_ResultHandler):
    def __call__(self) -> None:

        def text(m: _ComputeGraphManager) -> str:
            s = m.stats
            line = '<line />\n'

            t = line
            t += 'Stats:\n'
            t += line
            t += f'{s.weapon_name}:\n'
            t += line
            for k, v in asdict(s.data).items():
                t += f'{k}: {v:.0%}\n'
            t += line

            return t.replace(
                '<line />',
                '-'*max(len(s) for s in t.splitlines())
            )

        txt = merge_text_side_by_side(
            text(self._managers[0]),
            text(self._managers[1]),
        )
        print(txt)
