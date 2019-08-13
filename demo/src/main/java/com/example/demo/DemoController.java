package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.Collection;

@RestController
@RequestMapping("/api/v1")
public class DemoController {

    private final DemoRepository demoRepository;
//    private final
// constructor injection
    @Autowired
    public DemoController(DemoRepository demoRepository) {
        this.demoRepository = demoRepository;
    }

//    @CrossOrigin(origins = "*")
    @GetMapping("/names")
    public Collection<DemoModel> names() {
        return  demoRepository.findAll();
    }

/*    @PostMapping("/names")
    public ResponseEntity<Void> addName(@RequestBody DemoModel demoModel) throws Exception {
//        DemoRepository.save(new DemoModel(demoModel));
//        demoRepository.save(demoModel);
//        demoRepository.save(new DemoModel(demoModel));
        System.out.println(demoModel);
//        return new ResponseEntity<>("Hello", HttpStatus.OK);
        return new ResponseEntity<Void>(HttpStatus.OK);
    };*/
/*@PostMapping("/names")
public ResponseEntity<?> method2(@RequestBody Map<String, Object> payload) throws Exception{
//    return "method2";
//    System.out.println(payload);

*//*    for(Object i : payload.values()) {
        System.out.println(i);
    }*//*

//        demoRepository.save(new DemoModel(x));
//    demoRepository.save(new DemoModel(payload));
//    return new ResponseEntity<>(payload, HttpStatus.OK);
    return ResponseEntity.ok().body(payload);
}*/

    /*@PostMapping("/names")
    public ResponseEntity method2(@RequestBody DemoModel demoModel) throws Exception {
        System.out.println(demoModel);
        demoRepository.save(demoModel);
//        return ResponseEntity.ok().body(demoModel);
        return ResponseEntity.ok().body("foo");
    }*/

    @PostMapping("/names")
    public void method2(@RequestBody DemoModel demoModel) throws Exception {
        System.out.println(demoModel);
        demoRepository.save(demoModel);
//        return ResponseEntity.ok().body(demoModel);
    }

    @DeleteMapping("/names")
    public void method(@RequestBody DemoModel demoModel ) {
        System.out.println(demoModel);
        demoRepository.deleteById(demoModel.getId());
    }

}
