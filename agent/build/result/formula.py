from __future__ import annotations
from agent.utils import merge_text_side_by_side
from agent.build.damage import _ComputeGraphManager
from agent.build.result._handler import _ResultHandler


class Formula(_ResultHandler):
    def __call__(self) -> None:
        def text(m: _ComputeGraphManager) -> str:
            f = m.formula
            d = f.data
            line = '<line />\n'

            t = line
            t += 'Multipliers:\n'
            t += line
            t += f'{f.weapon_name}:\n'
            t += line
            t += f'   WD      {d.WD:.3f}\n'
            t += f' x TWD     {d.TWD:.3f}\n'
            t += f' x AMP1    {d.AMP1:.3f}\n'
            t += f' x AMP2    {d.AMP2:.3f}\n'
            t += f' x AMP3    {d.AMP3:.3f}\n'
            t += f' x Crit_HS {d.Crit_HS:.3f}\n'
            t += f' x DTA_DTH {d.DTA_DTH:.3f}\n'
            t += f' x DTTOOC  {d.DTTOOC:.3f}\n'
            t += line
            t += f' = DMGx    {d.DMGx:.3f}\n'
            t += f' x ROF     {d.ROF:.3f}\n'
            t += line
            t += f' = DPSx    {d.DPSx:.3f}\n'
            t += line

            return t.replace(
                '<line />',
                '-'*max(len(s) for s in t.splitlines())
            )

        txt = merge_text_side_by_side(
            text(self._managers[0]),
            text(self._managers[1]),
        )

        print(txt)
