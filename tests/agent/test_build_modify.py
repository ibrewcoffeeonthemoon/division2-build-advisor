import pytest

from agent import *


@pytest.mark.parametrize('build', ['Name1', 'Name2'], indirect=True)
@pytest.mark.parametrize('new_name', ['AAAAA', 'BBBBB'])
def test_build_change_name(
    build: Build,
    new_name: str,
):
    build.name = new_name
    assert build.name == new_name
