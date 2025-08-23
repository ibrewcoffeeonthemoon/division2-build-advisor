from abc import ABC, abstractmethod
from agent.build.result._handler import _ResultHandler
import agent.build.damage.output as Output


class _GradientsHandler(_ResultHandler, ABC):
    @property
    @abstractmethod
    def _topic(self) -> str: ...

    @abstractmethod
    def _item_row_text(
        self,
        attr: Output.Gradients.Items.Item.Attribute,
        grad_format: str,
    ) -> str: ...

    def text(self, weapon_id: int = 0) -> str:
        m = self._managers[weapon_id]
        g = m.gradients

        t = self.SEP
        t += f'{g.name} {self._topic}:\n'
        t += self.SEP
        t += f'Build: {self._build.name}\n'
        for items in g.items_ls:
            for item in items.items:
                t += self.SEP
                t += f'{item.type}: {item.name}\n'
                for attr in item.attrs:
                    if attr.grad is not None:
                        # name = f'{attr.name} {attr.value:.1%}'
                        # delta = attr.value * attr.grad
                        # t += f'  {name:20}: {delta:{g.grad_format}}\n'
                        t += self._item_row_text(attr, g.grad_format)
        t += self.SEP

        return t.replace(
            self.SEP_TAG,
            '-'*max(len(s) for s in t.splitlines())
        )
