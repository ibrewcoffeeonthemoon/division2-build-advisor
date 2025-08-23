from __future__ import annotations
from agent.build.result._handler import _ResultHandler


class Formula(_ResultHandler):
    def text(self, weapon_id: int = 0) -> str:
        m = self._managers[weapon_id]
        f = m.formula
        d = f.data

        t = self.SEP
        t += 'Multipliers:\n'
        t += self.SEP
        t += f'Build: {self._build.name}\n'
        t += f'Weapon: {f.weapon_name}\n'
        t += self.SEP
        t += f'   WD      {d.WD:.3f}\n'
        t += f' x TWD     {d.TWD:.3f}\n'
        t += f' x AMP1    {d.AMP1:.3f}\n'
        t += f' x AMP2    {d.AMP2:.3f}\n'
        t += f' x AMP3    {d.AMP3:.3f}\n'
        t += f' x Crit_HS {d.Crit_HS:.3f}\n'
        t += f' x DTA_DTH {d.DTA_DTH:.3f}\n'
        t += f' x DTTOOC  {d.DTTOOC:.3f}\n'
        t += self.SEP
        t += f' = DMGx    {d.DMGx:.3f}\n'
        t += f' x ROF     {d.ROF:.3f}\n'
        t += self.SEP
        t += f' = DPSx    {d.DPSx:.3f}\n'
        t += self.SEP

        return t.replace(
            self.SEP_TAG,
            '-'*max(len(s) for s in t.splitlines())
        )
