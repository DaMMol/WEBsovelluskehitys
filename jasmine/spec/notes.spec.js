describe('notes module', function () {
    beforeEach(function() {
        notes.clear();
        notes.add('first note');
        notes.add('second note');
        notes.add('third note');
        notes.add('fourth note');
        notes.add('fifth note');
    });
    describe('adding a note', function() {
        it("should be able to add a new note", function () {
            expect(notes.add('sixth note')).toBe(true);
            expect(notes.count()).toBe(6);
        });
        it("should ignore blank notes", function () {
            expect(notes.add('')).toBe(false);
            expect(notes.count()).toBe(5);
        });
        it('should ignore notes containing only whitespace', function() {
            expect(notes.add('   ')).toBe(false);
            expect(notes.count()).toBe(5);
        });

        it('should require a string parameter', function() {
            expect(notes.add()).toBe(false);
            expect(notes.count()).toBe(5);
        });
    });

    describe('deleting a note', function() {
        it('should be able to delete the first index', function() {
            expect(notes.remove(0)).toBe(true);
            expect(notes.count()).toBe(4);
        });
        it('should be able to delete the last index', function() {
            expect(notes.remove(notes.count()-1)).toBe(true);
            expect(notes.count()).toBe(4);
        });
        it('should return false if index is out of range', function() {
            expect(notes.remove(notes.count())).toBe(false);
            expect(notes.count()).toBe(5);
        });
        it('should return false if the parameter is missing', function() {
            expect(notes.remove()).toBe(false);
            expect(notes.count()).toBe(5);
        });
    });

    describe('getting the whole list', function(){
       it('it should return a list containing all of the notes', function () {
           expect(notes.list().length-notes.count()).toBe(0);
       });
    });

    describe('finding a note', function(){
        it('it should find a specific note', function () {
            let list = ['first note'];
            expect(notes.find('first')).toEqual(list);
        });
        it('it should find a multiple notes', function () {
            let list = ['first note','second note','third note','fourth note','fifth note'];
            expect(notes.find('note')).toEqual(list);
        });
        it('the search should not be case sensitive', function () {
            let list = ['first note','second note','third note','fourth note','fifth note'];
            expect(notes.find('NOTE')).toEqual(list);
        });
    });
});