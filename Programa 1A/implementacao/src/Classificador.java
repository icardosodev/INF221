import java.util.ArrayList;
import java.util.Collections;
import java.util.Scanner;

public class Classificador {
    private int numCompetidores;
    private ArrayList<Integer> notasCompetidores;
    private int numClassificados;
    private int minClassificados;

    public Classificador() {
        this.notasCompetidores = new ArrayList<>();
        this.numClassificados = 0;
    }

    public void setNotasCompetidores(int nota) {
        this.notasCompetidores.add(nota);
    }

    public int getNumCompetidores() {
        return numCompetidores;
    }

    public void setNumCompetidores(int numCompetidores) {
        this.numCompetidores = numCompetidores;
    }

    public void setNumClassificados(int numClassificados) {
        this.numClassificados = numClassificados;
    }

    public int getMinClassificados() {
        return minClassificados;
    }

    public void setMinClassificados(int minClassificados) {
        this.minClassificados = minClassificados;
    }

    public int getNumClassificados() {
        return numClassificados;
    }

    // complexidade ciclomatica = 3
     private double getMedia(int n) {
        if (n > this.numCompetidores) {
            n = this.numCompetidores;
        }
        int sum = 0;
        for (int i = 0; i < n; i++) {
            sum += this.notasCompetidores.get(i);
        }
        return (double) sum / n;
    }

    // complexidade ciclomatica = 3
    private double getStd(int n, double media) {
        if (n > this.numCompetidores) {
            n = this.numCompetidores;
        }
        double std = 0;
        for (int i = 0; i < n; i++) {
            std += Math.pow(this.notasCompetidores.get(i) - media, 2);
        }
        return Math.sqrt(std / n);
    }

    // complexidade ciclomatica = 4
    public void getResultado() {
        this.notasCompetidores.sort(Collections.reverseOrder());
        for (int i =  this.minClassificados; i < this.numCompetidores; i++) {
            if (this.notasCompetidores.get(i) < this.notasCompetidores.get(i - 1)) {
                this.numClassificados = i;
                break;
            }
        }
        if (this.numClassificados == 0) {
            this.numClassificados = this.numCompetidores;
        }
        double mediaClassificados = getMedia(this.numClassificados);
        double stdClassificados = getStd(this.numClassificados, mediaClassificados);
        double mediaCompetidores = getMedia(this.numCompetidores);
        double stdCompetidores = getStd(this.numCompetidores, mediaCompetidores);

        System.out.println(this.numClassificados);
        System.out.println(stdClassificados);
        System.out.println(mediaClassificados);
        System.out.println(stdCompetidores);
        System.out.println(mediaCompetidores);
    }

    // complexidade ciclomatica = 1
    public static void main(String[] args) {
        Classificador c = new Classificador();
        Scanner sc = new Scanner(System.in);
        int v = sc.nextInt();
        if (v < 1 || v > 1000) {
            throw new RuntimeException("Número de competidores inválido");
        }
        c.setNumCompetidores(v);
        v = sc.nextInt();
        if (v < 1 || v > c.getNumCompetidores()) {
            throw new RuntimeException("Número de classificados inválido");
        }
        c.setMinClassificados(v);
        for (int i = 0; i < c.getNumCompetidores(); i++) {
            v = sc.nextInt();
            if (v < 0) {
                throw new RuntimeException("Nota inválida");
            }
            c.setNotasCompetidores(v);
        }
        c.getResultado();
    }
}
