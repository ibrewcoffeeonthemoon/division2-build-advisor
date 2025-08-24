from datetime import datetime
from pathlib import Path

import pytest

from agent import *
from agent.result import Result
from agent.result._handler import _ResultHandler

LOG_FILE = Path("logs/test_main_.log")
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
def test_main(
    build: Build,
    result: str,
    result_handler: str,
    capsys: pytest.CaptureFixture[str],
):

    # e.g. build.dps_x
    _result: Result = getattr(build, result)
    assert isinstance(_result, Result)
    # e.g. build.dps_x.gradients
    _result_handler: _ResultHandler = getattr(_result, result_handler)
    assert isinstance(_result_handler, _ResultHandler)
    # e.g. build.dps_x.gradients()
    _result_handler()
    captured = capsys.readouterr()
    assert captured

    # create a readable timestamp
    timestamp = datetime.now().strftime("%Y-%m-%d %H:%M:%S.%f")

    # append with header
    with open(LOG_FILE, "a", encoding="utf-8") as f:
        f.write("\n" + "=" * 80 + "\n")
        f.write(f"[{timestamp}] Test: build={build.name}, result={result}, handler={result_handler}\n")
        f.write("=" * 80 + "\n")
        f.write(captured.out)
        f.write("\n")
