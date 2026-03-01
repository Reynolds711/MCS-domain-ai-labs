# Precision Parts Manufacturing
# Equipment Manual: CNC Lathe

## Document Information
- **Document ID:** PPM-MAN-001
- **Equipment ID:** PPM-CNC-001
- **Equipment Name:** CNC Lathe - Turning Center
- **Manufacturer:** PrecisionTech Industries
- **Model:** PT-2500 Series
- **Version:** 2.4
- **Last Updated:** August 2024
- **Approved By:** Plant Engineering Manager

---

## 1. EQUIPMENT OVERVIEW

### 1.1 Description
The PT-2500 CNC Lathe is a computer numerical control turning center designed for high-precision machining of cylindrical parts. This machine is the primary equipment for shaft, pin, and bushing production at Precision Parts Manufacturing.

### 1.2 Location
- **Building:** Main Production
- **Area:** Machining Cell A
- **Station:** MC-A-001

### 1.3 Primary Use
- Turning operations (external and internal)
- Facing operations
- Threading (internal and external)
- Grooving and parting
- Drilling and boring (with live tooling)

---

## 2. TECHNICAL SPECIFICATIONS

### 2.1 Machine Specifications

| Specification | Value | Notes |
|---------------|-------|-------|
| Max Swing Over Bed | 500 mm (19.7 in) | Maximum workpiece diameter |
| Max Turning Diameter | 350 mm (13.8 in) | With standard tooling |
| Max Turning Length | 600 mm (23.6 in) | Between centers |
| Max Spindle Speed | 4,500 RPM | **Do not exceed** |
| Spindle Motor Power | 22 kW (30 HP) | Continuous rating |
| Spindle Bore | 76 mm (3 in) | Through-hole capacity |
| Chuck Size | 254 mm (10 in) | 3-jaw hydraulic |
| Turret Positions | 12 | VDI 40 tooling |

### 2.2 Axis Specifications

| Axis | Travel | Rapid Traverse | Cutting Feed Rate |
|------|--------|----------------|-------------------|
| X-Axis | 260 mm (10.2 in) | 24 m/min | 0.001 - 500 mm/rev |
| Z-Axis | 650 mm (25.6 in) | 24 m/min | 0.001 - 500 mm/rev |

### 2.3 Positioning Accuracy

| Parameter | Value |
|-----------|-------|
| Positioning Accuracy | ±0.005 mm (±0.0002 in) |
| Repeatability | ±0.003 mm (±0.00012 in) |

### 2.4 Coolant System

| Parameter | Value |
|-----------|-------|
| Coolant Tank Capacity | 300 liters (80 gallons) |
| Coolant Pump Output | 40 liters/min |
| Recommended Coolant | Water-soluble coolant, 8-10% concentration |
| Coolant Pressure | 2-5 bar adjustable |

### 2.5 Power Requirements

| Parameter | Value |
|-----------|-------|
| Electrical Supply | 480V, 3-phase, 60 Hz |
| Connected Load | 45 kVA |
| Compressed Air | 6 bar minimum (90 psi) |
| Air Consumption | 150 liters/min |

---

## 3. OPERATING PARAMETERS

### 3.1 Recommended Cutting Parameters by Material

#### Aluminum Alloys (6061, 7075)
| Operation | Speed (SFM) | Feed (IPR) | DOC (in) |
|-----------|-------------|------------|----------|
| Roughing | 800-1000 | 0.010-0.015 | 0.100-0.150 |
| Finishing | 1000-1200 | 0.004-0.008 | 0.010-0.030 |
| Threading | 300-400 | Pitch-based | N/A |

#### Steel - Low Carbon (1018, 1020)
| Operation | Speed (SFM) | Feed (IPR) | DOC (in) |
|-----------|-------------|------------|----------|
| Roughing | 400-500 | 0.010-0.012 | 0.080-0.120 |
| Finishing | 500-600 | 0.004-0.006 | 0.010-0.020 |
| Threading | 100-150 | Pitch-based | N/A |

#### Steel - Medium Carbon (1045)
| Operation | Speed (SFM) | Feed (IPR) | DOC (in) |
|-----------|-------------|------------|----------|
| Roughing | 350-450 | 0.008-0.010 | 0.060-0.100 |
| Finishing | 450-550 | 0.003-0.005 | 0.010-0.020 |
| Threading | 80-120 | Pitch-based | N/A |

#### Stainless Steel (304, 316)
| Operation | Speed (SFM) | Feed (IPR) | DOC (in) |
|-----------|-------------|------------|----------|
| Roughing | 200-300 | 0.006-0.008 | 0.050-0.080 |
| Finishing | 300-400 | 0.003-0.005 | 0.010-0.015 |
| Threading | 50-80 | Pitch-based | N/A |

### 3.2 Operating Limits

**CRITICAL: These limits must not be exceeded**

| Parameter | Maximum | Warning |
|-----------|---------|---------|
| Spindle Speed | 4,500 RPM | Alarm at 4,400 RPM |
| Spindle Load | 100% | Warning at 85% |
| Axis Rapid | 24 m/min | N/A |
| Cutting Feed | 500 mm/rev | N/A |
| Workpiece Weight | 150 kg (330 lbs) | Including chuck jaw weight |

---

## 4. SAFETY REQUIREMENTS

### 4.1 Required PPE
All operators must wear when operating this equipment:
- Safety glasses with side shields (ANSI Z87.1)
- Safety shoes (steel toe)
- No loose clothing, jewelry, or long hair (tie back)
- Hearing protection when spindle > 2000 RPM

### 4.2 Safety Interlocks
The following interlocks are installed and **must never be bypassed**:

| Interlock | Function | Bypass = Termination |
|-----------|----------|---------------------|
| Chuck Guard Door | Prevents spindle start with door open | Yes |
| Chuck Pressure | Prevents operation if <25 bar | Yes |
| Coolant Level | Warning if <20%, stops if <10% | Warning only |
| Spindle Overload | Stops spindle if >100% load | Yes |
| E-Stop (3 locations) | Immediate all-stop | Yes |

### 4.3 Pre-Operation Safety Checks
Before starting any operation:
1. ✓ Verify all guards are in place and secure
2. ✓ Confirm chuck pressure is in green zone (35-45 bar)
3. ✓ Check E-stop accessibility (front, side, pendant)
4. ✓ Verify coolant level is adequate (>30%)
5. ✓ Inspect chuck jaws for damage or wear
6. ✓ Confirm work area is clear of obstructions
7. ✓ Check for any maintenance lockout tags

### 4.4 Emergency Procedures

**In case of emergency:**
1. Press nearest E-STOP (red mushroom button)
2. Do NOT open chuck guard until spindle fully stops
3. Notify supervisor immediately
4. Complete incident report
5. Do not restart until authorized

**Emergency contacts:**
- Maintenance Emergency: Ext. 2234
- Plant Safety: Ext. 2100
- First Aid: Ext. 2911

---

## 5. STARTUP PROCEDURE

### 5.1 Daily Startup Sequence

1. **Power On**
   - Turn main disconnect to ON
   - Wait for control system boot (approximately 90 seconds)
   - Verify no alarms on display

2. **Reference/Home**
   - Press [HOME] button
   - Machine will reference all axes
   - Wait for "Home Complete" message

3. **Warm-Up Cycle**
   - Run warm-up program (O9000) if machine has been idle >4 hours
   - Warm-up runs spindle at progressively increasing speeds
   - Duration: approximately 10 minutes

4. **Hydraulic System**
   - Verify chuck pressure gauge reads 35-45 bar
   - Cycle chuck open/close 3 times
   - Listen for abnormal sounds

5. **Lubrication Check**
   - Verify auto-lube indicator is active (green light)
   - Check way lube level in sight glass
   - Look for any visible lube leaks

6. **Coolant System**
   - Check coolant level (>30% minimum)
   - Verify coolant concentration (8-10%)
   - Test coolant flow by running pump briefly

7. **Tool Verification**
   - If continuing previous job, verify tool offsets
   - If new setup, load and verify all tools
   - Run tool check program if available

---

## 6. SHUTDOWN PROCEDURE

### 6.1 End of Shift Shutdown

1. **Complete Current Operation**
   - Finish current cycle
   - Remove completed workpiece

2. **Machine Cleaning**
   - Remove chips from work area
   - Wipe down chuck and tailstock
   - Clean chip conveyor if equipped

3. **Spindle Position**
   - Move axes to home position
   - Orient spindle to reference position

4. **Coolant**
   - Turn off coolant pump
   - Allow coolant to drain from work area

5. **Documentation**
   - Log production count
   - Note any issues in shift log
   - Report any maintenance needs

6. **Power Down (if last shift)**
   - Only if no next shift
   - Leave control on if overnight standby
   - Turn off main disconnect if extended shutdown

---

## 7. TROUBLESHOOTING GUIDE

### 7.1 Common Alarms

| Alarm Code | Description | First Response |
|------------|-------------|----------------|
| AL-0010 | Spindle Overload | Reduce cutting parameters |
| AL-0015 | Chuck Pressure Low | Check hydraulic system |
| AL-0020 | Coolant Level Low | Refill coolant tank |
| AL-0025 | Servo Error X/Z | Reference axes, call Maintenance if persists |
| AL-0030 | Door Interlock | Close chuck guard door |
| AL-0050 | Emergency Stop | Clear area, reset E-stop |

### 7.2 When to Contact Maintenance

**Contact Maintenance immediately for:**
- Any alarm that doesn't clear with standard reset
- Unusual sounds (grinding, squealing, knocking)
- Visible smoke or burning smell
- Hydraulic fluid leaks
- Electrical issues or sparking
- Axis positioning errors that persist

**Maintenance contact:** Extension 2234

---

## 8. TOOLING INFORMATION

### 8.1 Standard Tool Stations

| Station | Tool Type | Standard Use |
|---------|-----------|--------------|
| T01 | External Roughing | CNMG 432 insert |
| T02 | External Finishing | VNMG 331 insert |
| T03 | Threading External | 60° V-thread insert |
| T04 | Grooving | 3mm groove insert |
| T05 | Parting | 2mm parting blade |
| T06 | Boring Bar | Internal roughing |
| T07 | Internal Threading | 60° internal thread |
| T08 | Drill | Center drill |
| T09 | Drill | Through-hole drill |
| T10-T12 | Reserved | Special operations |

### 8.2 Tool Change Procedure

1. Verify spindle is stopped
2. Move turret to tool change position
3. Call tool number (e.g., T0101 for station 1)
4. Wait for turret index complete
5. Verify correct tool is in position
6. Run at reduced speed for first cut to verify

---

## APPENDIX A: QUICK REFERENCE CARD

### Maximum Values - DO NOT EXCEED
- Max Spindle Speed: **4,500 RPM**
- Max Workpiece Diameter: **350 mm**
- Max Workpiece Length: **600 mm**
- Max Workpiece Weight: **150 kg**
- Min Chuck Pressure: **25 bar**

### Emergency Contacts
- Maintenance: **Ext. 2234**
- Safety: **Ext. 2100**
- First Aid: **Ext. 2911**

### Daily Checks
1. Guards secure
2. Chuck pressure (35-45 bar)
3. Coolant level (>30%)
4. Lube level (sight glass)
5. Clear work area

---

*This manual is controlled documentation. Do not modify without Engineering approval.*
*Document Control: PPM-MAN-001 Rev 2.4*
