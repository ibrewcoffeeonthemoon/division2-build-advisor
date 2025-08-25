from pathlib import Path

import pytest

from agent import *
from agent.result import Result
from agent.result._handler import _ResultHandler


@pytest.mark.parametrize(
    'build',
    [
        '6 Red Lexington Ranger',
        "6 Red St. Elmo's Engine",
    ],
    indirect=True,
)
@pytest.mark.parametrize(
    'result',
    [
        'dmg',
        'dmg_x',
        'dps',
        'dps_x'
    ]
)
@pytest.mark.parametrize(
    'result_handler',
    [
        'stats',
        'formula',
        'breakdown',
        'gradients',
        'delta'
    ]
)
def test_build(
    build: Build,
    result: str,
    result_handler: str,
):
    build1 = build.copy()

    for b in (build, build1):
        # e.g. build.dps_x
        assert b._finalized == False
        _result: Result = getattr(b, result)
        assert b._finalized == False
        b_new = b.copy()
        assert isinstance(b_new, Build)
        assert b_new._finalized == False
        # e.g. build.dps_x.gradients
        _: _ResultHandler = getattr(_result, result_handler)
        assert b._finalized == True
        with pytest.raises(AssertionError):
            b.copy()
