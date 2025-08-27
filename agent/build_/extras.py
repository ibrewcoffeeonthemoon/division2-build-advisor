from typing import Self

from agent.item.specialization import Specialization
from agent.item.watch import KeenersWatch


class _Extras:
    def __init__(self) -> None:
        self._specialization: Specialization
        self._keeners_watch: KeenersWatch

        # call the next mixin in the MRO
        super().__init__()

    @property
    def specialization(self) -> Specialization:
        return self._specialization

    @specialization.setter
    def specialization(self, specialization: Specialization) -> None:
        self._specialization = specialization

    @property
    def keeners_watch(self) -> KeenersWatch:
        return self._keeners_watch

    @keeners_watch.setter
    def keeners_watch(self, keeners_watch: KeenersWatch) -> None:
        self._keeners_watch = keeners_watch

    @property
    def _extras(self) -> tuple[Specialization, KeenersWatch]:
        return (
            self._specialization,
            self._keeners_watch,
        )

    def extras(
        self,
        specialization: Specialization,
        keeners_watch: KeenersWatch,
    ) -> Self:
        self._specialization = specialization
        self._keeners_watch = keeners_watch
        return self
