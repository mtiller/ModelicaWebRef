#!/usr/bin/env python

"""
command-line wrapper for Jinja2

Usage:
 % jinjafy.py [-o output_file] [-v vars_file] template_file

"""

import argparse
import json
import jinja2
import os

parser = argparse.ArgumentParser()

parser.add_argument("template_file",
                    help="File containing Jinja2 markup")
parser.add_argument("-o", "--output",
                    help="Name of output file")
parser.add_argument("-v", "--vars", default="vars.json",
                    help="Name of file containing JSON encoded dictionary")

args = parser.parse_args()

template_dir = os.path.dirname(os.path.abspath(args.template_file))

if args.output==None:
    (output_file, ext) = os.path.splitext(os.path.abspath(args.template_file))
else:
    output_file = args.output

loader = jinja2.FileSystemLoader(template_dir)
env = jinja2.Environment(loader=loader)

# Read in JSON data
if args.vars==None:
    vars = {}
else:
    try:
        vf = open(args.vars, "r")
        jsondata = vf.read()
        vf.close()
        vars = json.loads(jsondata)
    except:
        vars = {}

#print "Variables:"
#for k in vars:
#    print "  '%s'='%s'" % (k, vars[k])

template = env.get_template(args.template_file)
result = template.render(**vars)

fp = open(output_file, "w")
fp.write(result)
fp.close()
