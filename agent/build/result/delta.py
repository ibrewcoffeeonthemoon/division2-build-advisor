from __future__ import annotations
from agent.build.damage import _ComputeGraphManager
from agent.build.result._handler import _ResultHandler


class Delta(_ResultHandler):
    def text(self, m: _ComputeGraphManager) -> str:
        g = m.gradients

        t = self.SEP
        t += f'{g.name} Delta:\n'
        for items in g.items_ls:
            for item in items.items:
                t += self.SEP
                t += f'{" "*2}{item.name}:\n'
                for attr in item.attrs:
                    if attr.grad is not None:
                        name = f'{attr.name} {attr.value:.1%}'
                        delta = attr.value * attr.grad
                        t += f'{" "*4}{name:20}: {delta:{g.grad_format}}\n'
        t += self.SEP

        return t.replace(
            self.SEP_TAG,
            '-'*max(len(s) for s in t.splitlines())
        )
