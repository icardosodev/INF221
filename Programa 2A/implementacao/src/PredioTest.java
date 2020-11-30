import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class PredioTest {

    @Test
    public void addFuncionario() {
        Predio p = new Predio();
        p.addFuncionario(50);
        assertEquals(1, p.getFuncionariosAndar().size());
        assertEquals(50, p.getFuncionariosAndar().get(0));
    }

    @Test
    public void getMelhorAndar() {
        Predio p = new Predio();
        p.setNumAndares(3);
        p.addFuncionario(10);
        p.addFuncionario(30);
        p.addFuncionario(20);
        p.getResult();
        assertEquals(1, p.getMelhorAndar().size());
        assertEquals(1, p.getMelhorAndar().get(0));
    }

    @Test
    public void getMinMinutos() {
        Predio p = new Predio();
        p.setNumAndares(3);
        p.addFuncionario(10);
        p.addFuncionario(30);
        p.addFuncionario(20);
        p.getResult();
        assertEquals(60, p.getMinMinutos());
    }

    @Test
    public void getResult() {
        Predio p = new Predio();
        p.setNumAndares(3);
        p.addFuncionario(10);
        p.addFuncionario(30);
        p.addFuncionario(20);
        p.getResult();
        assertEquals(60, p.getMinMinutos());
        assertEquals(1, p.getMelhorAndar().size());
        assertEquals(1, p.getMelhorAndar().get(0));
    }
}