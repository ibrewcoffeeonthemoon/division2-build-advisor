from __future__ import annotations
from agent.utils import merge_text_side_by_side
from agent.build.damage import _ComputeGraphManager
from agent.build.result._handler import _ResultHandler


class Delta(_ResultHandler):
    def __call__(self) -> None:
        def text(m: _ComputeGraphManager) -> str:
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

        txt = merge_text_side_by_side(
            text(self._managers[0]),
            text(self._managers[1]),
        )

        print(txt)
