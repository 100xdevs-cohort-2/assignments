const request = require('supertest');
const app = require('../');

describe('Course Selling App Tests', () => {
    // Test for Admin Signup
    it('should create a new admin account', (done) => {
        request(app)
            .post('/admin/signup')
            .send({ username: 'admin', password: 'pass' })
            .expect(200)
            .then(response => {
                expect(response.body.message).toBe('Admin created successfully');
                done();
            });
    });

    // Test for Creating a Course
    it('should create a new course', (done) => {
        request(app)
            .post('/admin/courses')
            .set('username', 'admin')
            .set('password', 'pass')
            .send({
                title: 'Test Course',
                description: 'Test Description',
                price: 100,
                imageLink: 'https://linktoimage.com'
            })
            .expect(200)
            .then(response => {
                expect(response.body.message).toBe('Course created successfully');
                expect(response.body.courseId).toBeDefined();
                done();
            });
    });

    // Test for Listing All Courses (Admin)
    it('should list all courses for admin', (done) => {
        request(app)
            .get('/admin/courses')
            .set('username', 'admin')
            .set('password', 'pass')
            .expect(200)
            .then(response => {
                expect(Array.isArray(response.body.courses)).toBe(true);
                done();
            });
    });

    // Test for User Signup
    it('should create a new user account', (done) => {
        request(app)
            .post('/users/signup')
            .send({ username: 'user', password: 'pass' })
            .expect(200)
            .then(response => {
                expect(response.body.message).toBe('User created successfully');
                done();
            });
    });

    // Test for Listing All Courses (User)
    it('should list all courses for user', (done) => {
        request(app)
            .get('/users/courses')
            .set('username', 'user')
            .set('password', 'pass')
            .expect(200)
            .then(response => {
                expect(Array.isArray(response.body.courses)).toBe(true);
                done();
            });
    });

    // Test for Listing Purchased Courses
    it('should list all purchased courses for a user', (done) => {
        request(app)
            .get('/users/purchasedCourses')
            .set('Authorization', 'Bearer jwt_token_here')
            .expect(200)
            .then(response => {
                expect(Array.isArray(response.body.purchasedCourses)).toBe(true);
                done();
            });
    });
});
