import {AdRecord} from "../records/ad.record";
import exp from "constants";

test('AdRecord returns data from database for one entry',async ()=>{
   const ad = await  AdRecord.getOne('abc')

   console.log(ad)

   expect(ad).toBeDefined();
   expect(ad.id).toBe('abc');
   expect(ad.name).toBe('Testname');

});

test ('AdRecord returns null from database for unexisting entry', async ()=>{
   const ad = await  AdRecord.getOne('---');
   expect(ad).toBeNull();
});