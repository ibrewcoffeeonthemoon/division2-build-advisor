from __future__ import annotations
from agent.build.result._handler import _ResultHandler


class Delta(_ResultHandler):
    def text(self, weapon_id: int = 0) -> str:
        m = self._managers[weapon_id]
        g = m.gradients

        t = self.SEP
        t += f'{g.name} Delta:\n'
        t += self.SEP
        t += f'Build: {self._build.name}\n'
        for items in g.items_ls:
            for item in items.items:
                t += self.SEP
                t += f'{item.name}:\n'
                for attr in item.attrs:
                    if attr.grad is not None:
                        name = f'{attr.name} {attr.value:.1%}'
                        delta = attr.value * attr.grad
                        t += f'  {name:20}: {delta:{g.grad_format}}\n'
        t += self.SEP

        return t.replace(
            self.SEP_TAG,
            '-'*max(len(s) for s in t.splitlines())
        )
