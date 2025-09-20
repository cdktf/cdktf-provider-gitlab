# `groupLevelMrApprovals` Submodule <a name="`groupLevelMrApprovals` Submodule" id="@cdktf/provider-gitlab.groupLevelMrApprovals"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GroupLevelMrApprovals <a name="GroupLevelMrApprovals" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/resources/group_level_mr_approvals gitlab_group_level_mr_approvals}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/v15/grouplevelmrapprovals"

grouplevelmrapprovals.NewGroupLevelMrApprovals(scope Construct, id *string, config GroupLevelMrApprovalsConfig) GroupLevelMrApprovals
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovalsConfig">GroupLevelMrApprovalsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovalsConfig">GroupLevelMrApprovalsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.resetAllowAuthorApproval">ResetAllowAuthorApproval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.resetAllowCommitterApproval">ResetAllowCommitterApproval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.resetAllowOverridesToApproverListPerMergeRequest">ResetAllowOverridesToApproverListPerMergeRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.resetKeepSettingsOnDestroy">ResetKeepSettingsOnDestroy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.resetRequireReauthenticationToApprove">ResetRequireReauthenticationToApprove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.resetRetainApprovalsOnPush">ResetRetainApprovalsOnPush</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetAllowAuthorApproval` <a name="ResetAllowAuthorApproval" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.resetAllowAuthorApproval"></a>

```go
func ResetAllowAuthorApproval()
```

##### `ResetAllowCommitterApproval` <a name="ResetAllowCommitterApproval" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.resetAllowCommitterApproval"></a>

```go
func ResetAllowCommitterApproval()
```

##### `ResetAllowOverridesToApproverListPerMergeRequest` <a name="ResetAllowOverridesToApproverListPerMergeRequest" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.resetAllowOverridesToApproverListPerMergeRequest"></a>

```go
func ResetAllowOverridesToApproverListPerMergeRequest()
```

##### `ResetKeepSettingsOnDestroy` <a name="ResetKeepSettingsOnDestroy" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.resetKeepSettingsOnDestroy"></a>

```go
func ResetKeepSettingsOnDestroy()
```

##### `ResetRequireReauthenticationToApprove` <a name="ResetRequireReauthenticationToApprove" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.resetRequireReauthenticationToApprove"></a>

```go
func ResetRequireReauthenticationToApprove()
```

##### `ResetRetainApprovalsOnPush` <a name="ResetRetainApprovalsOnPush" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.resetRetainApprovalsOnPush"></a>

```go
func ResetRetainApprovalsOnPush()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GroupLevelMrApprovals resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/v15/grouplevelmrapprovals"

grouplevelmrapprovals.GroupLevelMrApprovals_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/v15/grouplevelmrapprovals"

grouplevelmrapprovals.GroupLevelMrApprovals_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/v15/grouplevelmrapprovals"

grouplevelmrapprovals.GroupLevelMrApprovals_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/v15/grouplevelmrapprovals"

grouplevelmrapprovals.GroupLevelMrApprovals_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GroupLevelMrApprovals resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GroupLevelMrApprovals to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GroupLevelMrApprovals that should be imported.

Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/resources/group_level_mr_approvals#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GroupLevelMrApprovals to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.allowAuthorApprovalInput">AllowAuthorApprovalInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.allowCommitterApprovalInput">AllowCommitterApprovalInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.allowOverridesToApproverListPerMergeRequestInput">AllowOverridesToApproverListPerMergeRequestInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.groupInput">GroupInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.keepSettingsOnDestroyInput">KeepSettingsOnDestroyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.requireReauthenticationToApproveInput">RequireReauthenticationToApproveInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.retainApprovalsOnPushInput">RetainApprovalsOnPushInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.allowAuthorApproval">AllowAuthorApproval</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.allowCommitterApproval">AllowCommitterApproval</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.allowOverridesToApproverListPerMergeRequest">AllowOverridesToApproverListPerMergeRequest</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.group">Group</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.keepSettingsOnDestroy">KeepSettingsOnDestroy</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.requireReauthenticationToApprove">RequireReauthenticationToApprove</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.retainApprovalsOnPush">RetainApprovalsOnPush</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `AllowAuthorApprovalInput`<sup>Optional</sup> <a name="AllowAuthorApprovalInput" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.allowAuthorApprovalInput"></a>

```go
func AllowAuthorApprovalInput() interface{}
```

- *Type:* interface{}

---

##### `AllowCommitterApprovalInput`<sup>Optional</sup> <a name="AllowCommitterApprovalInput" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.allowCommitterApprovalInput"></a>

```go
func AllowCommitterApprovalInput() interface{}
```

- *Type:* interface{}

---

##### `AllowOverridesToApproverListPerMergeRequestInput`<sup>Optional</sup> <a name="AllowOverridesToApproverListPerMergeRequestInput" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.allowOverridesToApproverListPerMergeRequestInput"></a>

```go
func AllowOverridesToApproverListPerMergeRequestInput() interface{}
```

- *Type:* interface{}

---

##### `GroupInput`<sup>Optional</sup> <a name="GroupInput" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.groupInput"></a>

```go
func GroupInput() *string
```

- *Type:* *string

---

##### `KeepSettingsOnDestroyInput`<sup>Optional</sup> <a name="KeepSettingsOnDestroyInput" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.keepSettingsOnDestroyInput"></a>

```go
func KeepSettingsOnDestroyInput() interface{}
```

- *Type:* interface{}

---

##### `RequireReauthenticationToApproveInput`<sup>Optional</sup> <a name="RequireReauthenticationToApproveInput" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.requireReauthenticationToApproveInput"></a>

```go
func RequireReauthenticationToApproveInput() interface{}
```

- *Type:* interface{}

---

##### `RetainApprovalsOnPushInput`<sup>Optional</sup> <a name="RetainApprovalsOnPushInput" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.retainApprovalsOnPushInput"></a>

```go
func RetainApprovalsOnPushInput() interface{}
```

- *Type:* interface{}

---

##### `AllowAuthorApproval`<sup>Required</sup> <a name="AllowAuthorApproval" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.allowAuthorApproval"></a>

```go
func AllowAuthorApproval() interface{}
```

- *Type:* interface{}

---

##### `AllowCommitterApproval`<sup>Required</sup> <a name="AllowCommitterApproval" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.allowCommitterApproval"></a>

```go
func AllowCommitterApproval() interface{}
```

- *Type:* interface{}

---

##### `AllowOverridesToApproverListPerMergeRequest`<sup>Required</sup> <a name="AllowOverridesToApproverListPerMergeRequest" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.allowOverridesToApproverListPerMergeRequest"></a>

```go
func AllowOverridesToApproverListPerMergeRequest() interface{}
```

- *Type:* interface{}

---

##### `Group`<sup>Required</sup> <a name="Group" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.group"></a>

```go
func Group() *string
```

- *Type:* *string

---

##### `KeepSettingsOnDestroy`<sup>Required</sup> <a name="KeepSettingsOnDestroy" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.keepSettingsOnDestroy"></a>

```go
func KeepSettingsOnDestroy() interface{}
```

- *Type:* interface{}

---

##### `RequireReauthenticationToApprove`<sup>Required</sup> <a name="RequireReauthenticationToApprove" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.requireReauthenticationToApprove"></a>

```go
func RequireReauthenticationToApprove() interface{}
```

- *Type:* interface{}

---

##### `RetainApprovalsOnPush`<sup>Required</sup> <a name="RetainApprovalsOnPush" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.retainApprovalsOnPush"></a>

```go
func RetainApprovalsOnPush() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GroupLevelMrApprovalsConfig <a name="GroupLevelMrApprovalsConfig" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovalsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovalsConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/v15/grouplevelmrapprovals"

&grouplevelmrapprovals.GroupLevelMrApprovalsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Group: *string,
	AllowAuthorApproval: interface{},
	AllowCommitterApproval: interface{},
	AllowOverridesToApproverListPerMergeRequest: interface{},
	KeepSettingsOnDestroy: interface{},
	RequireReauthenticationToApprove: interface{},
	RetainApprovalsOnPush: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovalsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovalsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovalsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovalsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovalsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovalsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovalsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovalsConfig.property.group">Group</a></code> | <code>*string</code> | The ID or URL-encoded path of the group. |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovalsConfig.property.allowAuthorApproval">AllowAuthorApproval</a></code> | <code>interface{}</code> | Allow or prevent authors from self approving merge requests; `true` means authors can self approve. |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovalsConfig.property.allowCommitterApproval">AllowCommitterApproval</a></code> | <code>interface{}</code> | Allow or prevent committers from self approving merge requests. |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovalsConfig.property.allowOverridesToApproverListPerMergeRequest">AllowOverridesToApproverListPerMergeRequest</a></code> | <code>interface{}</code> | Allow or prevent overriding approvers per merge request. |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovalsConfig.property.keepSettingsOnDestroy">KeepSettingsOnDestroy</a></code> | <code>interface{}</code> | Set to true if the group merge request approval settings should not be reset to their pre-terraform defaults on destroy. |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovalsConfig.property.requireReauthenticationToApprove">RequireReauthenticationToApprove</a></code> | <code>interface{}</code> | Require approver to authenticate before adding the approval. |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovalsConfig.property.retainApprovalsOnPush">RetainApprovalsOnPush</a></code> | <code>interface{}</code> | Retain approval count on a new push. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovalsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovalsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovalsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovalsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovalsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovalsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovalsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Group`<sup>Required</sup> <a name="Group" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovalsConfig.property.group"></a>

```go
Group *string
```

- *Type:* *string

The ID or URL-encoded path of the group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/resources/group_level_mr_approvals#group GroupLevelMrApprovals#group}

---

##### `AllowAuthorApproval`<sup>Optional</sup> <a name="AllowAuthorApproval" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovalsConfig.property.allowAuthorApproval"></a>

```go
AllowAuthorApproval interface{}
```

- *Type:* interface{}

Allow or prevent authors from self approving merge requests; `true` means authors can self approve.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/resources/group_level_mr_approvals#allow_author_approval GroupLevelMrApprovals#allow_author_approval}

---

##### `AllowCommitterApproval`<sup>Optional</sup> <a name="AllowCommitterApproval" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovalsConfig.property.allowCommitterApproval"></a>

```go
AllowCommitterApproval interface{}
```

- *Type:* interface{}

Allow or prevent committers from self approving merge requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/resources/group_level_mr_approvals#allow_committer_approval GroupLevelMrApprovals#allow_committer_approval}

---

##### `AllowOverridesToApproverListPerMergeRequest`<sup>Optional</sup> <a name="AllowOverridesToApproverListPerMergeRequest" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovalsConfig.property.allowOverridesToApproverListPerMergeRequest"></a>

```go
AllowOverridesToApproverListPerMergeRequest interface{}
```

- *Type:* interface{}

Allow or prevent overriding approvers per merge request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/resources/group_level_mr_approvals#allow_overrides_to_approver_list_per_merge_request GroupLevelMrApprovals#allow_overrides_to_approver_list_per_merge_request}

---

##### `KeepSettingsOnDestroy`<sup>Optional</sup> <a name="KeepSettingsOnDestroy" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovalsConfig.property.keepSettingsOnDestroy"></a>

```go
KeepSettingsOnDestroy interface{}
```

- *Type:* interface{}

Set to true if the group merge request approval settings should not be reset to their pre-terraform defaults on destroy.

You will need to apply the resource with the new setting before destroying the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/resources/group_level_mr_approvals#keep_settings_on_destroy GroupLevelMrApprovals#keep_settings_on_destroy}

---

##### `RequireReauthenticationToApprove`<sup>Optional</sup> <a name="RequireReauthenticationToApprove" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovalsConfig.property.requireReauthenticationToApprove"></a>

```go
RequireReauthenticationToApprove interface{}
```

- *Type:* interface{}

Require approver to authenticate before adding the approval.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/resources/group_level_mr_approvals#require_reauthentication_to_approve GroupLevelMrApprovals#require_reauthentication_to_approve}

---

##### `RetainApprovalsOnPush`<sup>Optional</sup> <a name="RetainApprovalsOnPush" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovalsConfig.property.retainApprovalsOnPush"></a>

```go
RetainApprovalsOnPush interface{}
```

- *Type:* interface{}

Retain approval count on a new push.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/resources/group_level_mr_approvals#retain_approvals_on_push GroupLevelMrApprovals#retain_approvals_on_push}

---



