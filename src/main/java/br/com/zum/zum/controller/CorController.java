package br.com.zum.zum.controller;

import br.com.zum.zum.Repository.CorJPARepository;
import br.com.zum.zum.model.Cor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Created by William on 22/07/2017.
 */
@RestController
@RequestMapping("cores")
public class CorController {

    @Autowired
    private CorJPARepository corJPARepository;

    @RequestMapping(method = RequestMethod.GET)
    private List<Cor> buscarCor() {
        return corJPARepository.findAll();

    }

    @RequestMapping(method = RequestMethod.POST)
    private void salvar(@RequestBody Cor cor) {
        corJPARepository.save(cor);
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    private void excluir(@PathVariable Long id) {
        corJPARepository.delete(id);
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    private Cor recuperarUmSo(@PathVariable Long id) {
        return corJPARepository.findOne(id);
    }

}
