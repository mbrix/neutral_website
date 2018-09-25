#!/bin/bash
s3cmd -P --rexclude "^\."  sync ./dist/ s3://www.neutralproject.com/
s3cmd -P --rexclude "^\."  sync ./dist/ s3://neutralproject.com/
