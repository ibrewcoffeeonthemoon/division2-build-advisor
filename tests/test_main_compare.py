from pathlib import Path

import pytest

from agent import *
from agent.result import Result
from agent.result._handler import _ResultHandler
from tests.utils import log_test_output

LOG_FILE = Path("logs/test_main_compare.log")
LOG_FILE.parent.mkdir(exist_ok=True)


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
@pytest.mark.parametrize('weapon_id', [0, 1])
def test_main_compare(
    build: Build,
    result: str,
    result_handler: str,
    weapon_id: int,
    capsys: pytest.CaptureFixture[str],
):
    build1 = build.copy()

    handlers: list[_ResultHandler] = []
    for build in (build, build1):
        # e.g. build.dps_x
        _result = getattr(build, result)
        _result: Result = getattr(build, result)
        assert isinstance(_result, Result)
        # e.g. build.dps_x.gradients
        _result_handler: _ResultHandler = getattr(_result, result_handler)
        assert isinstance(_result_handler, _ResultHandler)
        handlers.append(_result_handler)

    # e.g.
    # Build.compare(
    #     build0.dps_x.gradients,
    #     build1.dps_x.gradients,
    # )
    Build.compare(handlers[0], handlers[1], weapon_id=weapon_id)
    test_output = capsys.readouterr()
    assert test_output

    # logs
    log_test_output(
        LOG_FILE,
        test_output,
        build=build.name,
        result=result,
        handler=result_handler
    )
