import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class Predio {
    private int numAndares;
    private List<Integer> funcionariosAndar;
    private List<Integer> minutos;
    private List<Integer> melhorAndar;
    private int minMinutos;

    public Predio() {
        this.funcionariosAndar = new ArrayList<>();
        this.minutos = new ArrayList<>();
        this.melhorAndar = new ArrayList<>();
    }

    // complexidade ciclomatica = 1
    public void addFuncionario(int funcionarios) {
        this.funcionariosAndar.add(funcionarios);
    }

    // complexidade ciclomatica = 1
    private void setMelhorAndar(int andar) {
        this.melhorAndar.add(andar);
    }

    // complexidade ciclomatica = 1
    public List<Integer> getMelhorAndar() {
        return melhorAndar;
    }

    // complexidade ciclomatica = 1
    public int getMinMinutos() {
        return minMinutos;
    }

    // complexidade ciclomatica = 1
    public List<Integer> getMinutos() {
        return minutos;
    }

    // complexidade ciclomatica = 1
    private void setMinutos(int minutos) {
        this.minutos.add(minutos);
    }

    // complexidade ciclomatica = 1
    public List<Integer> getFuncionariosAndar() {
        return funcionariosAndar;
    }

    // complexidade ciclomatica = 1
    public int getNumAndares() {
        return numAndares;
    }

    // complexidade ciclomatica = 1
    public void setNumAndares(int numAndares) {
        this.numAndares = numAndares;
    }

    // complexidade ciclomatica = 8
    public void getResult() {
        for (int i = 0; i < this.numAndares; i++) {
            int sum = 0;
            for (int j = 0; j < this.numAndares; j++) {
                if (i == j) {
                    continue;
                }
                sum += this.funcionariosAndar.get(j) * 2 * Math.abs(j - i);
            }
            this.setMinutos(sum);
        }

        int menor = 100000;
        for (int i: this.minutos) {
            if (i < menor) {
                menor = i;
            }
        }

        this.minMinutos = menor;

        for (int i = 0; i < this.numAndares; i++) {
            if (this.minutos.get(i) == menor) {
                this.setMelhorAndar(i);
            }
        }
    }

    public static void main(String[] args) {
        Predio p = new Predio();
        Scanner sc = new Scanner(System.in);
        int x;
        x = sc.nextInt();

        if (x < 3 || x > 5) {
            throw new RuntimeException("Número de andares invalido");
        }
        p.setNumAndares(x);

        for (int i = 0; i < p.getNumAndares(); i++) {
            x = sc.nextInt();
            if (x < 1 || x > 1000) {
                throw new RuntimeException("Número de funcionario por andar inválido");
            }
            p.addFuncionario(x);
        }

        p.getResult();

        System.out.println(p.minMinutos);
        for (int andar: p.getMelhorAndar()) {
            System.out.printf("%d ", andar + 1);
        }
        System.out.println("");
    }
}
