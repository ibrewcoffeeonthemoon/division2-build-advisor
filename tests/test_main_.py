from pathlib import Path

import pytest

from agent import *
from agent.result import Result
from agent.result._handler import _ResultHandler
from tests.builds import build_creators, build_result_handlers, build_results
from tests.utils import log_test_output

LOG_FILE = Path("logs/test_main_.log")
LOG_FILE.parent.mkdir(exist_ok=True)


@pytest.mark.parametrize('build', build_creators, indirect=True)
@pytest.mark.parametrize('result', build_results)
@pytest.mark.parametrize('result_handler', build_result_handlers)
def test_main(
    build: Build,
    result: str,
    result_handler: str,
    capsys: pytest.CaptureFixture[str],
):

    # e.g. build.dps_x
    _result: Result = getattr(build, result)
    assert isinstance(_result, Result)
    assert build._finalized == False
    # e.g. build.dps_x.gradients
    _result_handler: _ResultHandler = getattr(_result, result_handler)
    assert isinstance(_result_handler, _ResultHandler)
    assert build._finalized == True
    # e.g. build.dps_x.gradients()
    _result_handler()
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
