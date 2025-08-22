from __future__ import annotations
from dataclasses import asdict
from agent.utils import merge_text_side_by_side
from agent.build.damage import _ComputeGraphManager
from agent.build.result.handler import _ResultHandler


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
