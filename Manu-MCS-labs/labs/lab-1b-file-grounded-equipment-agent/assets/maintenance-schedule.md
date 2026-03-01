# Precision Parts Manufacturing
# Preventive Maintenance Schedule: CNC Lathe

## Document Information
- **Document ID:** PPM-PM-001
- **Equipment ID:** PPM-CNC-001
- **Equipment Name:** CNC Lathe - Turning Center (PT-2500)
- **Version:** 3.1
- **Last Updated:** August 2024
- **Approved By:** Maintenance Manager

---

## 1. MAINTENANCE OVERVIEW

### 1.1 Purpose
This document defines the preventive maintenance tasks required to maintain the PT-2500 CNC Lathe in optimal operating condition. Following this schedule is critical for:
- Equipment reliability and uptime
- Consistent part quality
- Operator safety
- Extended equipment life

### 1.2 Maintenance Responsibilities

| Role | Responsibilities |
|------|------------------|
| Operator | Daily checks, cleaning, reporting issues |
| Maintenance Technician | Scheduled PM tasks, repairs, calibration |
| Maintenance Supervisor | PM schedule oversight, resource allocation |
| Plant Engineering | Major repairs, upgrades, capital planning |

### 1.3 Maintenance Records
All maintenance activities must be documented in:
- Equipment maintenance log (paper, located on machine)
- CMMS system (Maximo) - Work order required for all PM tasks

---

## 2. DAILY MAINTENANCE (Operator)

### 2.1 Beginning of Shift Tasks
**Frequency:** Every shift start
**Responsibility:** Operator
**Estimated Time:** 10-15 minutes

| Task | Procedure | Pass Criteria |
|------|-----------|---------------|
| Visual Inspection | Walk around machine, look for leaks, damage | No visible issues |
| Chuck Pressure | Check hydraulic gauge | 35-45 bar |
| Coolant Level | Check sight glass on tank | >30% (green zone) |
| Coolant Condition | Visual check for contamination | Clear, no tramp oil |
| Way Lube Level | Check sight glass | In green zone |
| Chip Removal | Remove accumulated chips from work area | Clear of chips |
| Guard Condition | Verify all guards present and secure | All guards in place |

### 2.2 End of Shift Tasks
**Frequency:** Every shift end
**Responsibility:** Operator
**Estimated Time:** 10-15 minutes

| Task | Procedure | Pass Criteria |
|------|-----------|---------------|
| Thorough Chip Removal | Clean work area, chip pan, chip conveyor | Clean work zone |
| Wipe Down | Clean exposed slideways, chuck, tailstock | Free of chips/coolant |
| Spindle Position | Return to home position | At reference |
| Tool Condition | Visual check of tools used | No visible damage |
| Log Completion | Record any issues in shift log | Documented |

---

## 3. WEEKLY MAINTENANCE

### 3.1 Weekly Task List
**Frequency:** Once per week (typically Monday first shift)
**Responsibility:** Operator + Maintenance Technician
**Estimated Time:** 30-45 minutes

| Task ID | Task Description | Procedure | Responsibility |
|---------|-----------------|-----------|----------------|
| W-001 | Coolant Concentration Check | Use refractometer to measure concentration | Maintenance |
| W-002 | Coolant pH Test | Use pH strips, record value | Maintenance |
| W-003 | Chip Conveyor Inspection | Verify operation, check for jams | Operator |
| W-004 | Air Filter Inspection | Check electrical cabinet filters | Maintenance |
| W-005 | Lubrication System Check | Verify auto-lube cycling, check filters | Maintenance |
| W-006 | Hydraulic System Visual | Check for leaks, verify pressure | Maintenance |
| W-007 | Spindle Runout Check | Use dial indicator, record value | Maintenance |
| W-008 | Safety Interlock Test | Test door interlock, E-stops | Maintenance |

### 3.2 Weekly Specification Requirements

#### W-001: Coolant Concentration
- **Target:** 8-10%
- **Minimum:** 6%
- **Maximum:** 12%
- **Action if out of spec:** Add concentrate or water to adjust

#### W-002: Coolant pH
- **Target:** 8.5-9.5
- **Minimum:** 8.0
- **Maximum:** 10.0
- **Action if out of spec:** Consult coolant supplier, may need additive or replacement

#### W-007: Spindle Runout
- **Maximum:** 0.005 mm (0.0002 in)
- **Action if exceeded:** Report to Maintenance Supervisor for evaluation

---

## 4. MONTHLY MAINTENANCE

### 4.1 Monthly Task List
**Frequency:** Once per month (first week of month)
**Responsibility:** Maintenance Technician
**Estimated Time:** 2-3 hours

| Task ID | Task Description | Procedure | Parts/Supplies |
|---------|-----------------|-----------|----------------|
| M-001 | Coolant System Cleaning | Clean tank, filters, sump | Coolant cleaner |
| M-002 | Hydraulic Oil Level | Check and top off if needed | Hydraulic oil ISO 32 |
| M-003 | Way Lube Oil Level | Check and top off if needed | Way oil ISO 68 |
| M-004 | Chuck Jaw Inspection | Remove, clean, inspect jaws | Cleaning solvent |
| M-005 | Tailstock Alignment | Verify alignment with spindle | Alignment tools |
| M-006 | Electrical Cabinet Cleaning | Clean filters, check connections | Compressed air, vacuum |
| M-007 | Ball Screw Inspection | Visual check for wear, debris | N/A |
| M-008 | Belt Inspection | Check spindle drive belt condition | N/A |
| M-009 | Axis Backlash Check | Measure and record | Dial indicator |
| M-010 | Safety System Full Test | Complete interlock and E-stop test | Test log form |

### 4.2 Monthly Specification Requirements

#### M-005: Tailstock Alignment
- **Maximum misalignment:** 0.010 mm (0.0004 in)
- **Measurement method:** Test bar between centers, dial indicator
- **Action if exceeded:** Adjustment required by Maintenance

#### M-009: Axis Backlash
- **X-Axis maximum:** 0.005 mm (0.0002 in)
- **Z-Axis maximum:** 0.005 mm (0.0002 in)
- **Action if exceeded:** Ball screw adjustment required

---

## 5. QUARTERLY MAINTENANCE

### 5.1 Quarterly Task List
**Frequency:** Every 3 months
**Responsibility:** Maintenance Technician
**Estimated Time:** 4-6 hours

| Task ID | Task Description | Procedure | Parts/Supplies |
|---------|-----------------|-----------|----------------|
| Q-001 | Hydraulic Oil Change | Drain and replace | 40L hydraulic oil ISO 32 |
| Q-002 | Coolant System Flush | Complete drain, clean, refill | Coolant, cleaner |
| Q-003 | Chuck Lubrication | Lubricate chuck mechanism | Chuck grease |
| Q-004 | Turret Index Accuracy | Verify turret positioning | Test indicators |
| Q-005 | Geometric Accuracy Check | Full geometry verification | Laser/ballbar |
| Q-006 | Spindle Bearing Check | Vibration analysis | Vibration analyzer |
| Q-007 | Electrical Connection Check | Torque check on all connections | Torque wrench |
| Q-008 | Software/Parameter Backup | Backup CNC parameters | USB drive |

### 5.2 Quarterly Specification Requirements

#### Q-004: Turret Index Accuracy
- **Repeatability:** ±0.003 mm (±0.00012 in)
- **Action if exceeded:** Turret adjustment or repair required

#### Q-005: Geometric Accuracy
- **Circularity (Ballbar):** <0.010 mm
- **Squareness X to Z:** <0.010 mm/300 mm
- **Action if exceeded:** Geometry correction required

#### Q-006: Spindle Bearing Check
- **Vibration threshold:** <2.0 mm/s (velocity)
- **Action if exceeded:** Bearing replacement planning required

---

## 6. SEMI-ANNUAL MAINTENANCE

### 6.1 Semi-Annual Task List
**Frequency:** Every 6 months
**Responsibility:** Maintenance Technician + Contractor (if needed)
**Estimated Time:** Full day (8 hours)

| Task ID | Task Description | Procedure | Parts/Supplies |
|---------|-----------------|-----------|----------------|
| S-001 | Spindle Belt Replacement | Replace drive belt | Belt kit |
| S-002 | Way Lube Oil Change | Drain and replace | 20L way oil ISO 68 |
| S-003 | Full Calibration | Complete machine calibration | Calibration tools |
| S-004 | Electrical System Inspection | Thermal imaging, connection check | Thermal camera |
| S-005 | Safety System Certification | Complete safety audit | Audit checklist |
| S-006 | Hydraulic Filter Change | Replace hydraulic filter | Filter element |
| S-007 | Air System Service | Replace filters, check regulator | Filter elements |

---

## 7. ANNUAL MAINTENANCE

### 7.1 Annual Task List
**Frequency:** Once per year
**Responsibility:** Maintenance + Plant Engineering + OEM Support
**Estimated Time:** 2-3 days (scheduled downtime)

| Task ID | Task Description | Procedure | Parts/Supplies |
|---------|-----------------|-----------|----------------|
| A-001 | Spindle Service | Complete spindle inspection/service | Spindle kit |
| A-002 | Ball Screw Service | Inspect, clean, repack | Grease kit |
| A-003 | Hydraulic System Overhaul | Complete system service | Seals, filters, oil |
| A-004 | Electrical System Overhaul | Complete inspection and test | Various |
| A-005 | Full Machine Calibration | OEM-level calibration | N/A |
| A-006 | Safety System Recertification | Complete safety certification | Audit forms |
| A-007 | Control System Updates | Apply software updates | N/A |
| A-008 | Documentation Update | Update all maintenance docs | N/A |

---

## 8. LUBRICATION SPECIFICATIONS

### 8.1 Lubrication Points and Requirements

| Location | Lubricant | Quantity | Frequency |
|----------|-----------|----------|-----------|
| Spindle Bearings | Grease (auto-lube) | Auto-dispensed | Continuous |
| X-Axis Ball Screw | Grease (auto-lube) | Auto-dispensed | Continuous |
| Z-Axis Ball Screw | Grease (auto-lube) | Auto-dispensed | Continuous |
| Linear Guideways | Way oil ISO 68 | Auto-dispensed | Continuous |
| Chuck Mechanism | Chuck grease | 50g | Quarterly |
| Tailstock Quill | Way oil ISO 68 | Manual | Weekly |
| Turret Index | Light oil | Auto-dispensed | Continuous |
| Hydraulic System | Hydraulic oil ISO 32 | 40L total | Quarterly change |

### 8.2 Approved Lubricants

| Application | Specification | Approved Brands |
|-------------|---------------|-----------------|
| Hydraulic Oil | ISO VG 32 | Mobil DTE 24, Shell Tellus S2 M 32 |
| Way Oil | ISO VG 68 | Mobil Vactra No. 2, Shell Tonna S2 M 68 |
| Spindle Grease | NLGI 2 | SKF LGMT 2, Shell Gadus S2 V100 2 |
| Chuck Grease | NLGI 2 EP | SKF LGEP 2, Shell Gadus S2 V220 2 |

---

## 9. MAINTENANCE LOG

### 9.1 Recording Requirements
All maintenance activities must be recorded with:
- Date and time
- Task ID and description
- Technician name
- Findings (pass/fail, measurements)
- Corrective actions taken
- Parts used
- Time spent

### 9.2 Log Location
- Paper log: Maintenance binder at machine
- Electronic: Maximo CMMS - Asset PPM-CNC-001

### 9.3 Reporting Requirements
- Daily checks: Shift log
- Weekly tasks: Weekly PM report
- Monthly/Quarterly/Annual: Formal PM work order with findings

---

## 10. SPARE PARTS INVENTORY

### 10.1 Recommended Stock Parts

| Part Number | Description | Qty to Stock | Lead Time |
|-------------|-------------|--------------|-----------|
| PPM-FLT-001 | Hydraulic Filter Element | 2 | 1 week |
| PPM-FLT-002 | Air Filter (Cabinet) | 4 | 1 week |
| PPM-BLT-001 | Spindle Drive Belt | 1 | 2 weeks |
| PPM-SEL-001 | Hydraulic Cylinder Seals | 1 set | 2 weeks |
| PPM-CKJ-001 | Chuck Jaw Set | 1 set | 4 weeks |
| PPM-INS-001 | Coolant Level Switch | 1 | 1 week |
| PPM-INS-002 | Hydraulic Pressure Switch | 1 | 2 weeks |
| PPM-LMP-001 | Work Light Bulb | 2 | 1 week |

---

## APPENDIX: MAINTENANCE QUICK REFERENCE

### Operator Daily Checks (10 min)
1. ☐ Visual inspection - no leaks or damage
2. ☐ Chuck pressure: 35-45 bar
3. ☐ Coolant level: >30%
4. ☐ Way lube level: green zone
5. ☐ Guards secure
6. ☐ Work area clean

### When to Call Maintenance
- Any alarm that won't clear
- Unusual sounds
- Visible leaks
- Out-of-spec readings
- Safety concerns

**Maintenance Contact: Extension 2234**

### PM Schedule Summary
| Frequency | Responsibility | Approx. Time |
|-----------|---------------|--------------|
| Daily | Operator | 15 min/shift |
| Weekly | Maintenance | 45 min |
| Monthly | Maintenance | 3 hours |
| Quarterly | Maintenance | 6 hours |
| Semi-Annual | Maintenance | 8 hours |
| Annual | Maintenance + OEM | 2-3 days |

---

*This schedule is controlled documentation. Do not modify without Maintenance Manager approval.*
*Document Control: PPM-PM-001 Rev 3.1*
