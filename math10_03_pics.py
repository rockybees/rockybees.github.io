import numpy as np
import matplotlib.pyplot as plt

# Define the function y = x^2
x = np.linspace(-2, 2, 100)  # Generate 100 points from -2 to 2
y = x**2

# Create the plot
plt.figure(figsize=(6,6))
plt.plot(x, y, label=r"$y = x^2$", color="blue")  # Plot the function
plt.scatter([0, 1], [0, 1], color="red", zorder=3, label="Points (0,0) & (1,1)")  # Plot the points

# Add labels and title
plt.xlabel("x-axis")
plt.ylabel("y-axis")
plt.title("Plot of $y = x^2$")
plt.axhline(0, color='black', linewidth=1)  # x-axis
plt.axvline(0, color='black', linewidth=1)  # y-axis
plt.grid(True, linestyle="--", alpha=0.6)
plt.legend()
plt.show()
