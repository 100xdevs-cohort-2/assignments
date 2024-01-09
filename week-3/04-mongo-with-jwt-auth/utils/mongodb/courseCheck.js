const { ObjectId } = require('mongodb');
const { Course } = require('../../db');

const isCourseTitlePresent = async (courseTitle) => {
  const resp = await Course.findOne({ title: courseTitle });
  return resp !== null;
};

const isCourseIdValid = async (courseId) => {
  try {
    const resp = await Course.findOne({ _id: new ObjectId(courseId) });
    return resp !== null;
  } catch (error) {
    console.log({ error });
  }
};

module.exports = { isCourseIdValid, isCourseTitlePresent };
