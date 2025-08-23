from abc import ABC, abstractmethod

import agent.damage.output as Output
from agent.result._handler import _ResultHandler


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
                        t += self._item_row_text(attr, g.grad_format)
        t += self.SEP

        return t.replace(
            self.SEP_TAG,
            '-'*max(len(s) for s in t.splitlines())
        )
