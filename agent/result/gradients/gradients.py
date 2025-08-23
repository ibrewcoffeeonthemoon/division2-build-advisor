from __future__ import annotations
from agent.build.result.gradients import _GradientsHandler
import agent.build.damage.output as Output


class Gradients(_GradientsHandler):
    @property
    def _topic(self) -> str:
        return 'Gradients'

    def _item_row_text(
        self,
        attr: Output.Gradients.Items.Item.Attribute,
        grad_format: str
    ) -> str:
        name = f'{attr.name} {attr.value:.1%}'
        t = f'  {name:20}: {attr.grad:{grad_format}}\n'
        return t
