from copy import deepcopy
from functools import cache, cached_property
from typing import Self, Type, TypeVar

from agent.build_.extras import _Extras
from agent.build_.gears import _Gears
from agent.build_.weapons import _Weapons
from agent.damage import DMG, DPS, DMGx, DPSx, _ComputeGraphManager
from agent.item.attribute import *
from agent.result import Result
from agent.result._handler import _ResultHandler
from agent.utils import merge_text_side_by_side

T = TypeVar('T', bound=_ComputeGraphManager)


class Build(_Weapons, _Gears, _Extras):
    def __init__(
        self,
        name: str,
        *,
        chc_basic: float = 0.10,
        chd_basic: float = 0.25,
        hs_basic: float = 0.55,
        hsc_basic: float = 0.2,
    ) -> None:
        self._name = name
        super(_Weapons).__init__()
        super(_Gears).__init__()
        super(_Extras).__init__()
        self._chc_basic = chc_basic
        self._chd_basic = chd_basic
        self._hs_basic = hs_basic
        self._hsc_basic = hsc_basic

        # state
        self._finalized = False

    # properties

    @property
    def name(self) -> str:
        return self._name

    @name.setter
    def name(self, name: str) -> None:
        self._name = name

    @cache
    def _graph_manager(self, cls: Type[T], id: int) -> T:
        """
        This cached function ensure one build will create independent compute graph
        for each unique metric calculation, and will only create it once
        """
        # once this flag has been set, should not modify any build items anymore
        self._finalized = True

        return cls(
            self._weapons[id],
            self._gears,
            self._extras,
            chc_basic=self._chc_basic,
            chd_basic=self._chd_basic,
            hs_basic=self._hs_basic,
            hsc_basic=self._hsc_basic,
        )

    # result
    @cached_property
    def dmg(self) -> Result:
        return Result(self, DMG)

    @cached_property
    def dmg_x(self) -> Result:
        return Result(self, DMGx)

    @cached_property
    def dps(self) -> Result:
        return Result(self, DPS)

    @cached_property
    def dps_x(self) -> Result:
        return Result(self, DPSx)

    # utils

    def copy(self) -> Self:
        assert not self._finalized, \
            'This build has already finalized. Only copy non-finalized build, or calculation results may be wrong.'

        return deepcopy(self)

    @classmethod
    def compare(
        cls,
        *handlers: _ResultHandler,
        weapon_id: int = 0,
    ) -> None:
        print(merge_text_side_by_side(
            *[h.text(weapon_id) for h in handlers]
        ))
