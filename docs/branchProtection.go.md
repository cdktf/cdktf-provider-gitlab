# `branchProtection` Submodule <a name="`branchProtection` Submodule" id="@cdktf/provider-gitlab.branchProtection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BranchProtection <a name="BranchProtection" id="@cdktf/provider-gitlab.branchProtection.BranchProtection"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.9.0/docs/resources/branch_protection gitlab_branch_protection}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/branchprotection"

branchprotection.NewBranchProtection(scope Construct, id *string, config BranchProtectionConfig) BranchProtection
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionConfig">BranchProtectionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionConfig">BranchProtectionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.putAllowedToMerge">PutAllowedToMerge</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.putAllowedToPush">PutAllowedToPush</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.putAllowedToUnprotect">PutAllowedToUnprotect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.resetAllowedToMerge">ResetAllowedToMerge</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.resetAllowedToPush">ResetAllowedToPush</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.resetAllowedToUnprotect">ResetAllowedToUnprotect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.resetAllowForcePush">ResetAllowForcePush</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.resetCodeOwnerApprovalRequired">ResetCodeOwnerApprovalRequired</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.resetMergeAccessLevel">ResetMergeAccessLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.resetPushAccessLevel">ResetPushAccessLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.resetUnprotectAccessLevel">ResetUnprotectAccessLevel</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAllowedToMerge` <a name="PutAllowedToMerge" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.putAllowedToMerge"></a>

```go
func PutAllowedToMerge(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.putAllowedToMerge.parameter.value"></a>

- *Type:* interface{}

---

##### `PutAllowedToPush` <a name="PutAllowedToPush" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.putAllowedToPush"></a>

```go
func PutAllowedToPush(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.putAllowedToPush.parameter.value"></a>

- *Type:* interface{}

---

##### `PutAllowedToUnprotect` <a name="PutAllowedToUnprotect" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.putAllowedToUnprotect"></a>

```go
func PutAllowedToUnprotect(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.putAllowedToUnprotect.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAllowedToMerge` <a name="ResetAllowedToMerge" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.resetAllowedToMerge"></a>

```go
func ResetAllowedToMerge()
```

##### `ResetAllowedToPush` <a name="ResetAllowedToPush" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.resetAllowedToPush"></a>

```go
func ResetAllowedToPush()
```

##### `ResetAllowedToUnprotect` <a name="ResetAllowedToUnprotect" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.resetAllowedToUnprotect"></a>

```go
func ResetAllowedToUnprotect()
```

##### `ResetAllowForcePush` <a name="ResetAllowForcePush" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.resetAllowForcePush"></a>

```go
func ResetAllowForcePush()
```

##### `ResetCodeOwnerApprovalRequired` <a name="ResetCodeOwnerApprovalRequired" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.resetCodeOwnerApprovalRequired"></a>

```go
func ResetCodeOwnerApprovalRequired()
```

##### `ResetMergeAccessLevel` <a name="ResetMergeAccessLevel" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.resetMergeAccessLevel"></a>

```go
func ResetMergeAccessLevel()
```

##### `ResetPushAccessLevel` <a name="ResetPushAccessLevel" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.resetPushAccessLevel"></a>

```go
func ResetPushAccessLevel()
```

##### `ResetUnprotectAccessLevel` <a name="ResetUnprotectAccessLevel" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.resetUnprotectAccessLevel"></a>

```go
func ResetUnprotectAccessLevel()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a BranchProtection resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/branchprotection"

branchprotection.BranchProtection_IsConstruct(x interface{}) *bool
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/branchprotection"

branchprotection.BranchProtection_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/branchprotection"

branchprotection.BranchProtection_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/branchprotection"

branchprotection.BranchProtection_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a BranchProtection resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the BranchProtection to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing BranchProtection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.9.0/docs/resources/branch_protection#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the BranchProtection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.property.allowedToMerge">AllowedToMerge</a></code> | <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeList">BranchProtectionAllowedToMergeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.property.allowedToPush">AllowedToPush</a></code> | <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushList">BranchProtectionAllowedToPushList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.property.allowedToUnprotect">AllowedToUnprotect</a></code> | <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectList">BranchProtectionAllowedToUnprotectList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.property.branchProtectionId">BranchProtectionId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.property.allowedToMergeInput">AllowedToMergeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.property.allowedToPushInput">AllowedToPushInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.property.allowedToUnprotectInput">AllowedToUnprotectInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.property.allowForcePushInput">AllowForcePushInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.property.branchInput">BranchInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.property.codeOwnerApprovalRequiredInput">CodeOwnerApprovalRequiredInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.property.mergeAccessLevelInput">MergeAccessLevelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.property.pushAccessLevelInput">PushAccessLevelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.property.unprotectAccessLevelInput">UnprotectAccessLevelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.property.allowForcePush">AllowForcePush</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.property.branch">Branch</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.property.codeOwnerApprovalRequired">CodeOwnerApprovalRequired</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.property.mergeAccessLevel">MergeAccessLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.property.pushAccessLevel">PushAccessLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.property.unprotectAccessLevel">UnprotectAccessLevel</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AllowedToMerge`<sup>Required</sup> <a name="AllowedToMerge" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.property.allowedToMerge"></a>

```go
func AllowedToMerge() BranchProtectionAllowedToMergeList
```

- *Type:* <a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeList">BranchProtectionAllowedToMergeList</a>

---

##### `AllowedToPush`<sup>Required</sup> <a name="AllowedToPush" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.property.allowedToPush"></a>

```go
func AllowedToPush() BranchProtectionAllowedToPushList
```

- *Type:* <a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushList">BranchProtectionAllowedToPushList</a>

---

##### `AllowedToUnprotect`<sup>Required</sup> <a name="AllowedToUnprotect" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.property.allowedToUnprotect"></a>

```go
func AllowedToUnprotect() BranchProtectionAllowedToUnprotectList
```

- *Type:* <a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectList">BranchProtectionAllowedToUnprotectList</a>

---

##### `BranchProtectionId`<sup>Required</sup> <a name="BranchProtectionId" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.property.branchProtectionId"></a>

```go
func BranchProtectionId() *f64
```

- *Type:* *f64

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `AllowedToMergeInput`<sup>Optional</sup> <a name="AllowedToMergeInput" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.property.allowedToMergeInput"></a>

```go
func AllowedToMergeInput() interface{}
```

- *Type:* interface{}

---

##### `AllowedToPushInput`<sup>Optional</sup> <a name="AllowedToPushInput" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.property.allowedToPushInput"></a>

```go
func AllowedToPushInput() interface{}
```

- *Type:* interface{}

---

##### `AllowedToUnprotectInput`<sup>Optional</sup> <a name="AllowedToUnprotectInput" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.property.allowedToUnprotectInput"></a>

```go
func AllowedToUnprotectInput() interface{}
```

- *Type:* interface{}

---

##### `AllowForcePushInput`<sup>Optional</sup> <a name="AllowForcePushInput" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.property.allowForcePushInput"></a>

```go
func AllowForcePushInput() interface{}
```

- *Type:* interface{}

---

##### `BranchInput`<sup>Optional</sup> <a name="BranchInput" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.property.branchInput"></a>

```go
func BranchInput() *string
```

- *Type:* *string

---

##### `CodeOwnerApprovalRequiredInput`<sup>Optional</sup> <a name="CodeOwnerApprovalRequiredInput" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.property.codeOwnerApprovalRequiredInput"></a>

```go
func CodeOwnerApprovalRequiredInput() interface{}
```

- *Type:* interface{}

---

##### `MergeAccessLevelInput`<sup>Optional</sup> <a name="MergeAccessLevelInput" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.property.mergeAccessLevelInput"></a>

```go
func MergeAccessLevelInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `PushAccessLevelInput`<sup>Optional</sup> <a name="PushAccessLevelInput" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.property.pushAccessLevelInput"></a>

```go
func PushAccessLevelInput() *string
```

- *Type:* *string

---

##### `UnprotectAccessLevelInput`<sup>Optional</sup> <a name="UnprotectAccessLevelInput" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.property.unprotectAccessLevelInput"></a>

```go
func UnprotectAccessLevelInput() *string
```

- *Type:* *string

---

##### `AllowForcePush`<sup>Required</sup> <a name="AllowForcePush" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.property.allowForcePush"></a>

```go
func AllowForcePush() interface{}
```

- *Type:* interface{}

---

##### `Branch`<sup>Required</sup> <a name="Branch" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.property.branch"></a>

```go
func Branch() *string
```

- *Type:* *string

---

##### `CodeOwnerApprovalRequired`<sup>Required</sup> <a name="CodeOwnerApprovalRequired" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.property.codeOwnerApprovalRequired"></a>

```go
func CodeOwnerApprovalRequired() interface{}
```

- *Type:* interface{}

---

##### `MergeAccessLevel`<sup>Required</sup> <a name="MergeAccessLevel" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.property.mergeAccessLevel"></a>

```go
func MergeAccessLevel() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `PushAccessLevel`<sup>Required</sup> <a name="PushAccessLevel" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.property.pushAccessLevel"></a>

```go
func PushAccessLevel() *string
```

- *Type:* *string

---

##### `UnprotectAccessLevel`<sup>Required</sup> <a name="UnprotectAccessLevel" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.property.unprotectAccessLevel"></a>

```go
func UnprotectAccessLevel() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### BranchProtectionAllowedToMerge <a name="BranchProtectionAllowedToMerge" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMerge"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMerge.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/branchprotection"

&branchprotection.BranchProtectionAllowedToMerge {
	GroupId: *f64,
	UserId: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMerge.property.groupId">GroupId</a></code> | <code>*f64</code> | The ID of a GitLab group allowed to perform the relevant action. Mutually exclusive with `user_id`. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMerge.property.userId">UserId</a></code> | <code>*f64</code> | The ID of a GitLab user allowed to perform the relevant action. Mutually exclusive with `group_id`. |

---

##### `GroupId`<sup>Optional</sup> <a name="GroupId" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMerge.property.groupId"></a>

```go
GroupId *f64
```

- *Type:* *f64

The ID of a GitLab group allowed to perform the relevant action. Mutually exclusive with `user_id`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.9.0/docs/resources/branch_protection#group_id BranchProtection#group_id}

---

##### `UserId`<sup>Optional</sup> <a name="UserId" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMerge.property.userId"></a>

```go
UserId *f64
```

- *Type:* *f64

The ID of a GitLab user allowed to perform the relevant action. Mutually exclusive with `group_id`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.9.0/docs/resources/branch_protection#user_id BranchProtection#user_id}

---

### BranchProtectionAllowedToPush <a name="BranchProtectionAllowedToPush" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPush"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPush.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/branchprotection"

&branchprotection.BranchProtectionAllowedToPush {
	DeployKeyId: *f64,
	GroupId: *f64,
	UserId: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPush.property.deployKeyId">DeployKeyId</a></code> | <code>*f64</code> | The ID of a GitLab deploy key allowed to perform the relevant action. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPush.property.groupId">GroupId</a></code> | <code>*f64</code> | The ID of a GitLab group allowed to perform the relevant action. Mutually exclusive with `deploy_key_id` and `user_id`. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPush.property.userId">UserId</a></code> | <code>*f64</code> | The ID of a GitLab user allowed to perform the relevant action. Mutually exclusive with `deploy_key_id` and `group_id`. |

---

##### `DeployKeyId`<sup>Optional</sup> <a name="DeployKeyId" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPush.property.deployKeyId"></a>

```go
DeployKeyId *f64
```

- *Type:* *f64

The ID of a GitLab deploy key allowed to perform the relevant action.

Mutually exclusive with `group_id` and `user_id`. This field is read-only until Gitlab 17.5.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.9.0/docs/resources/branch_protection#deploy_key_id BranchProtection#deploy_key_id}

---

##### `GroupId`<sup>Optional</sup> <a name="GroupId" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPush.property.groupId"></a>

```go
GroupId *f64
```

- *Type:* *f64

The ID of a GitLab group allowed to perform the relevant action. Mutually exclusive with `deploy_key_id` and `user_id`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.9.0/docs/resources/branch_protection#group_id BranchProtection#group_id}

---

##### `UserId`<sup>Optional</sup> <a name="UserId" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPush.property.userId"></a>

```go
UserId *f64
```

- *Type:* *f64

The ID of a GitLab user allowed to perform the relevant action. Mutually exclusive with `deploy_key_id` and `group_id`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.9.0/docs/resources/branch_protection#user_id BranchProtection#user_id}

---

### BranchProtectionAllowedToUnprotect <a name="BranchProtectionAllowedToUnprotect" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotect"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotect.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/branchprotection"

&branchprotection.BranchProtectionAllowedToUnprotect {
	GroupId: *f64,
	UserId: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotect.property.groupId">GroupId</a></code> | <code>*f64</code> | The ID of a GitLab group allowed to perform the relevant action. Mutually exclusive with `user_id`. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotect.property.userId">UserId</a></code> | <code>*f64</code> | The ID of a GitLab user allowed to perform the relevant action. Mutually exclusive with `group_id`. |

---

##### `GroupId`<sup>Optional</sup> <a name="GroupId" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotect.property.groupId"></a>

```go
GroupId *f64
```

- *Type:* *f64

The ID of a GitLab group allowed to perform the relevant action. Mutually exclusive with `user_id`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.9.0/docs/resources/branch_protection#group_id BranchProtection#group_id}

---

##### `UserId`<sup>Optional</sup> <a name="UserId" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotect.property.userId"></a>

```go
UserId *f64
```

- *Type:* *f64

The ID of a GitLab user allowed to perform the relevant action. Mutually exclusive with `group_id`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.9.0/docs/resources/branch_protection#user_id BranchProtection#user_id}

---

### BranchProtectionConfig <a name="BranchProtectionConfig" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/branchprotection"

&branchprotection.BranchProtectionConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Branch: *string,
	Project: *string,
	AllowedToMerge: interface{},
	AllowedToPush: interface{},
	AllowedToUnprotect: interface{},
	AllowForcePush: interface{},
	CodeOwnerApprovalRequired: interface{},
	MergeAccessLevel: *string,
	PushAccessLevel: *string,
	UnprotectAccessLevel: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionConfig.property.branch">Branch</a></code> | <code>*string</code> | Name of the branch. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionConfig.property.project">Project</a></code> | <code>*string</code> | The id of the project. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionConfig.property.allowedToMerge">AllowedToMerge</a></code> | <code>interface{}</code> | allowed_to_merge block. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionConfig.property.allowedToPush">AllowedToPush</a></code> | <code>interface{}</code> | allowed_to_push block. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionConfig.property.allowedToUnprotect">AllowedToUnprotect</a></code> | <code>interface{}</code> | allowed_to_unprotect block. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionConfig.property.allowForcePush">AllowForcePush</a></code> | <code>interface{}</code> | Can be set to true to allow users with push access to force push. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionConfig.property.codeOwnerApprovalRequired">CodeOwnerApprovalRequired</a></code> | <code>interface{}</code> | Can be set to true to require code owner approval before merging. Only available for Premium and Ultimate instances. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionConfig.property.mergeAccessLevel">MergeAccessLevel</a></code> | <code>*string</code> | Access levels allowed to merge. Valid values are: `no one`, `developer`, `maintainer`. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionConfig.property.pushAccessLevel">PushAccessLevel</a></code> | <code>*string</code> | Access levels allowed to push. Valid values are: `no one`, `developer`, `maintainer`. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionConfig.property.unprotectAccessLevel">UnprotectAccessLevel</a></code> | <code>*string</code> | Access levels allowed to unprotect. Valid values are: `developer`, `maintainer`, `admin`. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Branch`<sup>Required</sup> <a name="Branch" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionConfig.property.branch"></a>

```go
Branch *string
```

- *Type:* *string

Name of the branch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.9.0/docs/resources/branch_protection#branch BranchProtection#branch}

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

The id of the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.9.0/docs/resources/branch_protection#project BranchProtection#project}

---

##### `AllowedToMerge`<sup>Optional</sup> <a name="AllowedToMerge" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionConfig.property.allowedToMerge"></a>

```go
AllowedToMerge interface{}
```

- *Type:* interface{}

allowed_to_merge block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.9.0/docs/resources/branch_protection#allowed_to_merge BranchProtection#allowed_to_merge}

---

##### `AllowedToPush`<sup>Optional</sup> <a name="AllowedToPush" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionConfig.property.allowedToPush"></a>

```go
AllowedToPush interface{}
```

- *Type:* interface{}

allowed_to_push block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.9.0/docs/resources/branch_protection#allowed_to_push BranchProtection#allowed_to_push}

---

##### `AllowedToUnprotect`<sup>Optional</sup> <a name="AllowedToUnprotect" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionConfig.property.allowedToUnprotect"></a>

```go
AllowedToUnprotect interface{}
```

- *Type:* interface{}

allowed_to_unprotect block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.9.0/docs/resources/branch_protection#allowed_to_unprotect BranchProtection#allowed_to_unprotect}

---

##### `AllowForcePush`<sup>Optional</sup> <a name="AllowForcePush" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionConfig.property.allowForcePush"></a>

```go
AllowForcePush interface{}
```

- *Type:* interface{}

Can be set to true to allow users with push access to force push.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.9.0/docs/resources/branch_protection#allow_force_push BranchProtection#allow_force_push}

---

##### `CodeOwnerApprovalRequired`<sup>Optional</sup> <a name="CodeOwnerApprovalRequired" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionConfig.property.codeOwnerApprovalRequired"></a>

```go
CodeOwnerApprovalRequired interface{}
```

- *Type:* interface{}

Can be set to true to require code owner approval before merging. Only available for Premium and Ultimate instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.9.0/docs/resources/branch_protection#code_owner_approval_required BranchProtection#code_owner_approval_required}

---

##### `MergeAccessLevel`<sup>Optional</sup> <a name="MergeAccessLevel" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionConfig.property.mergeAccessLevel"></a>

```go
MergeAccessLevel *string
```

- *Type:* *string

Access levels allowed to merge. Valid values are: `no one`, `developer`, `maintainer`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.9.0/docs/resources/branch_protection#merge_access_level BranchProtection#merge_access_level}

---

##### `PushAccessLevel`<sup>Optional</sup> <a name="PushAccessLevel" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionConfig.property.pushAccessLevel"></a>

```go
PushAccessLevel *string
```

- *Type:* *string

Access levels allowed to push. Valid values are: `no one`, `developer`, `maintainer`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.9.0/docs/resources/branch_protection#push_access_level BranchProtection#push_access_level}

---

##### `UnprotectAccessLevel`<sup>Optional</sup> <a name="UnprotectAccessLevel" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionConfig.property.unprotectAccessLevel"></a>

```go
UnprotectAccessLevel *string
```

- *Type:* *string

Access levels allowed to unprotect. Valid values are: `developer`, `maintainer`, `admin`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.9.0/docs/resources/branch_protection#unprotect_access_level BranchProtection#unprotect_access_level}

---

## Classes <a name="Classes" id="Classes"></a>

### BranchProtectionAllowedToMergeList <a name="BranchProtectionAllowedToMergeList" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/branchprotection"

branchprotection.NewBranchProtectionAllowedToMergeList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) BranchProtectionAllowedToMergeList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeList.get"></a>

```go
func Get(index *f64) BranchProtectionAllowedToMergeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BranchProtectionAllowedToMergeOutputReference <a name="BranchProtectionAllowedToMergeOutputReference" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/branchprotection"

branchprotection.NewBranchProtectionAllowedToMergeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) BranchProtectionAllowedToMergeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.resetGroupId">ResetGroupId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.resetUserId">ResetUserId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetGroupId` <a name="ResetGroupId" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.resetGroupId"></a>

```go
func ResetGroupId()
```

##### `ResetUserId` <a name="ResetUserId" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.resetUserId"></a>

```go
func ResetUserId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.property.accessLevel">AccessLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.property.accessLevelDescription">AccessLevelDescription</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.property.groupIdInput">GroupIdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.property.userIdInput">UserIdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.property.groupId">GroupId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.property.userId">UserId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AccessLevel`<sup>Required</sup> <a name="AccessLevel" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.property.accessLevel"></a>

```go
func AccessLevel() *string
```

- *Type:* *string

---

##### `AccessLevelDescription`<sup>Required</sup> <a name="AccessLevelDescription" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.property.accessLevelDescription"></a>

```go
func AccessLevelDescription() *string
```

- *Type:* *string

---

##### `GroupIdInput`<sup>Optional</sup> <a name="GroupIdInput" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.property.groupIdInput"></a>

```go
func GroupIdInput() *f64
```

- *Type:* *f64

---

##### `UserIdInput`<sup>Optional</sup> <a name="UserIdInput" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.property.userIdInput"></a>

```go
func UserIdInput() *f64
```

- *Type:* *f64

---

##### `GroupId`<sup>Required</sup> <a name="GroupId" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.property.groupId"></a>

```go
func GroupId() *f64
```

- *Type:* *f64

---

##### `UserId`<sup>Required</sup> <a name="UserId" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.property.userId"></a>

```go
func UserId() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BranchProtectionAllowedToPushList <a name="BranchProtectionAllowedToPushList" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/branchprotection"

branchprotection.NewBranchProtectionAllowedToPushList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) BranchProtectionAllowedToPushList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushList.get"></a>

```go
func Get(index *f64) BranchProtectionAllowedToPushOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BranchProtectionAllowedToPushOutputReference <a name="BranchProtectionAllowedToPushOutputReference" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/branchprotection"

branchprotection.NewBranchProtectionAllowedToPushOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) BranchProtectionAllowedToPushOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.resetDeployKeyId">ResetDeployKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.resetGroupId">ResetGroupId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.resetUserId">ResetUserId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDeployKeyId` <a name="ResetDeployKeyId" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.resetDeployKeyId"></a>

```go
func ResetDeployKeyId()
```

##### `ResetGroupId` <a name="ResetGroupId" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.resetGroupId"></a>

```go
func ResetGroupId()
```

##### `ResetUserId` <a name="ResetUserId" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.resetUserId"></a>

```go
func ResetUserId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.property.accessLevel">AccessLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.property.accessLevelDescription">AccessLevelDescription</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.property.deployKeyIdInput">DeployKeyIdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.property.groupIdInput">GroupIdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.property.userIdInput">UserIdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.property.deployKeyId">DeployKeyId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.property.groupId">GroupId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.property.userId">UserId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AccessLevel`<sup>Required</sup> <a name="AccessLevel" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.property.accessLevel"></a>

```go
func AccessLevel() *string
```

- *Type:* *string

---

##### `AccessLevelDescription`<sup>Required</sup> <a name="AccessLevelDescription" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.property.accessLevelDescription"></a>

```go
func AccessLevelDescription() *string
```

- *Type:* *string

---

##### `DeployKeyIdInput`<sup>Optional</sup> <a name="DeployKeyIdInput" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.property.deployKeyIdInput"></a>

```go
func DeployKeyIdInput() *f64
```

- *Type:* *f64

---

##### `GroupIdInput`<sup>Optional</sup> <a name="GroupIdInput" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.property.groupIdInput"></a>

```go
func GroupIdInput() *f64
```

- *Type:* *f64

---

##### `UserIdInput`<sup>Optional</sup> <a name="UserIdInput" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.property.userIdInput"></a>

```go
func UserIdInput() *f64
```

- *Type:* *f64

---

##### `DeployKeyId`<sup>Required</sup> <a name="DeployKeyId" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.property.deployKeyId"></a>

```go
func DeployKeyId() *f64
```

- *Type:* *f64

---

##### `GroupId`<sup>Required</sup> <a name="GroupId" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.property.groupId"></a>

```go
func GroupId() *f64
```

- *Type:* *f64

---

##### `UserId`<sup>Required</sup> <a name="UserId" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.property.userId"></a>

```go
func UserId() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BranchProtectionAllowedToUnprotectList <a name="BranchProtectionAllowedToUnprotectList" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/branchprotection"

branchprotection.NewBranchProtectionAllowedToUnprotectList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) BranchProtectionAllowedToUnprotectList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectList.get"></a>

```go
func Get(index *f64) BranchProtectionAllowedToUnprotectOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BranchProtectionAllowedToUnprotectOutputReference <a name="BranchProtectionAllowedToUnprotectOutputReference" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/branchprotection"

branchprotection.NewBranchProtectionAllowedToUnprotectOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) BranchProtectionAllowedToUnprotectOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.resetGroupId">ResetGroupId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.resetUserId">ResetUserId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetGroupId` <a name="ResetGroupId" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.resetGroupId"></a>

```go
func ResetGroupId()
```

##### `ResetUserId` <a name="ResetUserId" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.resetUserId"></a>

```go
func ResetUserId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.property.accessLevel">AccessLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.property.accessLevelDescription">AccessLevelDescription</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.property.groupIdInput">GroupIdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.property.userIdInput">UserIdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.property.groupId">GroupId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.property.userId">UserId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AccessLevel`<sup>Required</sup> <a name="AccessLevel" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.property.accessLevel"></a>

```go
func AccessLevel() *string
```

- *Type:* *string

---

##### `AccessLevelDescription`<sup>Required</sup> <a name="AccessLevelDescription" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.property.accessLevelDescription"></a>

```go
func AccessLevelDescription() *string
```

- *Type:* *string

---

##### `GroupIdInput`<sup>Optional</sup> <a name="GroupIdInput" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.property.groupIdInput"></a>

```go
func GroupIdInput() *f64
```

- *Type:* *f64

---

##### `UserIdInput`<sup>Optional</sup> <a name="UserIdInput" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.property.userIdInput"></a>

```go
func UserIdInput() *f64
```

- *Type:* *f64

---

##### `GroupId`<sup>Required</sup> <a name="GroupId" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.property.groupId"></a>

```go
func GroupId() *f64
```

- *Type:* *f64

---

##### `UserId`<sup>Required</sup> <a name="UserId" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.property.userId"></a>

```go
func UserId() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



