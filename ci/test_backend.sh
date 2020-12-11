#!/bin/bash
export COMPOSE_PROJECT_NAME=apple_${CI_COMMIT_SHA}
docker-compose -f docker/compose/test.yml run apple unittests.sh
exitcode=$?
docker-compose -f docker/compose/test.yml down
exit $exitcode
