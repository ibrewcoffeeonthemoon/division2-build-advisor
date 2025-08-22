from agent.utils import merge_text_side_by_side
from typing import TYPE_CHECKING
if TYPE_CHECKING:
    from agent.build import Build


class Gradients:
    def __init__(
        self,
        build: 'Build',
    ) -> None:
        self._build = build

    def __call__(self) -> None:
        txt1 = self._build._dps_x(0).gradients
        txt2 = self._build._dps_x(1).gradients

        txt = merge_text_side_by_side(txt1, txt2)

        print(txt)
