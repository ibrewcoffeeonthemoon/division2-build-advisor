from typing import Self, Unpack

from agent.item.attribute import _Attribute
from agent.item.specialization import Specialization as Specialization_
from agent.item.specialization import SpecializationKwargs
from agent.item.watch import KeenersWatch as KeenersWatch_
from agent.item.watch import KeenersWatchKwargs


class _Extras:
    def __init__(self) -> None:
        self._specialization: Specialization_ = Specialization_()
        self._keeners_watch: KeenersWatch_ = KeenersWatch_()

        # call the next mixin in the MRO
        super().__init__()

    @property
    def specialization(self) -> Specialization_:
        return self._specialization

    @specialization.setter
    def specialization(self, specialization: Specialization_) -> None:
        self._specialization = specialization

    @property
    def keeners_watch(self) -> KeenersWatch_:
        return self._keeners_watch

    @keeners_watch.setter
    def keeners_watch(self, keeners_watch: KeenersWatch_) -> None:
        self._keeners_watch = keeners_watch

    @property
    def extras(self) -> tuple[Specialization_, KeenersWatch_]:
        return (
            self._specialization,
            self._keeners_watch,
        )

    def Specialization(self, *args: _Attribute, **kwargs: Unpack[SpecializationKwargs]) -> Self:
        self._specialization = Specialization_(*args, **kwargs)
        return self

    def KeenersWatch(self, **kwargs: Unpack[KeenersWatchKwargs]) -> Self:
        self._keeners_watch = KeenersWatch_(**kwargs)
        return self

    def add_extras(
        self,
        specialization: Specialization_,
        keeners_watch: KeenersWatch_,
    ) -> Self:
        self._specialization = specialization
        self._keeners_watch = keeners_watch
        return self
