import torch


def main() -> None:
    """
    dmg_x = \
        (1 + wd_core + wd_type + wd_talent) \
        * (1 + twd_talent) \
        * (1 + amp1 * amp1_uptime) \
        * (1 + amp2 * amp2_uptime) \
        * (1 + amp3 * amp3_uptime) \
        * (1 + chc * chd + hsc * hsd) \
        * (1 + dta * armor_prob + dth * (1 - armor_prob)) \
        * (1 + dttooc * ooc_prob)

    """

    # 6 red cords, 40% weapon type bonus, 25% from keener's watch
    wd = torch.tensor(6*0.15+0.4+0.25, requires_grad=True)
    # basic Striker full buf
    twd = torch.tensor(0.65, requires_grad=True)

    # create the graph
    dmg_x = (1 + wd) * \
            (1 + twd)

    # calculate grads
    dmg_x.backward()

    # result
    print(f'{wd.grad=}')
    print(f'{twd.grad=}')


if __name__ == "__main__":
    main()
