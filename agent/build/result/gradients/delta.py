from __future__ import annotations
from agent.build.result.gradients import _GradientsHandler
import agent.build.damage.output as Output


class Delta(_GradientsHandler):
    @property
    def _topic(self) -> str:
        return 'Delta'

    def _item_row_text(
        self,
        attr: Output.Gradients.Items.Item.Attribute,
        grad_format: str
    ) -> str:
        name = f'{attr.name} {attr.value:.1%}'
        delta = attr.value * attr.grad
        t = f'  {name:20}: {delta:{grad_format}}\n'
        return t
