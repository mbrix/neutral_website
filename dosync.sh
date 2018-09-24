#!/bin/bash
s3cmd --rexclude "^\."  sync ./dist/ s3://www.neutralproject.com/
s3cmd --rexclude "^\."  sync ./dist/ s3://neutralproject.com/
