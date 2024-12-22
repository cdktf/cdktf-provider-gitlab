# `globalLevelNotifications` Submodule <a name="`globalLevelNotifications` Submodule" id="@cdktf/provider-gitlab.globalLevelNotifications"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GlobalLevelNotifications <a name="GlobalLevelNotifications" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.0/docs/resources/global_level_notifications gitlab_global_level_notifications}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/globallevelnotifications"

globallevelnotifications.NewGlobalLevelNotifications(scope Construct, id *string, config GlobalLevelNotificationsConfig) GlobalLevelNotifications
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotificationsConfig">GlobalLevelNotificationsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotificationsConfig">GlobalLevelNotificationsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.resetCloseIssue">ResetCloseIssue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.resetCloseMergeRequest">ResetCloseMergeRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.resetFailedPipeline">ResetFailedPipeline</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.resetFixedPipeline">ResetFixedPipeline</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.resetIssueDue">ResetIssueDue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.resetLevel">ResetLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.resetMergeMergeRequest">ResetMergeMergeRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.resetMergeWhenPipelineSucceeds">ResetMergeWhenPipelineSucceeds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.resetMovedProject">ResetMovedProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.resetNewIssue">ResetNewIssue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.resetNewMergeRequest">ResetNewMergeRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.resetNewNote">ResetNewNote</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.resetPushToMergeRequest">ResetPushToMergeRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.resetReassignIssue">ResetReassignIssue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.resetReassignMergeRequest">ResetReassignMergeRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.resetReopenIssue">ResetReopenIssue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.resetReopenMergeRequest">ResetReopenMergeRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.resetSuccessPipeline">ResetSuccessPipeline</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetCloseIssue` <a name="ResetCloseIssue" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.resetCloseIssue"></a>

```go
func ResetCloseIssue()
```

##### `ResetCloseMergeRequest` <a name="ResetCloseMergeRequest" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.resetCloseMergeRequest"></a>

```go
func ResetCloseMergeRequest()
```

##### `ResetFailedPipeline` <a name="ResetFailedPipeline" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.resetFailedPipeline"></a>

```go
func ResetFailedPipeline()
```

##### `ResetFixedPipeline` <a name="ResetFixedPipeline" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.resetFixedPipeline"></a>

```go
func ResetFixedPipeline()
```

##### `ResetIssueDue` <a name="ResetIssueDue" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.resetIssueDue"></a>

```go
func ResetIssueDue()
```

##### `ResetLevel` <a name="ResetLevel" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.resetLevel"></a>

```go
func ResetLevel()
```

##### `ResetMergeMergeRequest` <a name="ResetMergeMergeRequest" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.resetMergeMergeRequest"></a>

```go
func ResetMergeMergeRequest()
```

##### `ResetMergeWhenPipelineSucceeds` <a name="ResetMergeWhenPipelineSucceeds" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.resetMergeWhenPipelineSucceeds"></a>

```go
func ResetMergeWhenPipelineSucceeds()
```

##### `ResetMovedProject` <a name="ResetMovedProject" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.resetMovedProject"></a>

```go
func ResetMovedProject()
```

##### `ResetNewIssue` <a name="ResetNewIssue" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.resetNewIssue"></a>

```go
func ResetNewIssue()
```

##### `ResetNewMergeRequest` <a name="ResetNewMergeRequest" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.resetNewMergeRequest"></a>

```go
func ResetNewMergeRequest()
```

##### `ResetNewNote` <a name="ResetNewNote" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.resetNewNote"></a>

```go
func ResetNewNote()
```

##### `ResetPushToMergeRequest` <a name="ResetPushToMergeRequest" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.resetPushToMergeRequest"></a>

```go
func ResetPushToMergeRequest()
```

##### `ResetReassignIssue` <a name="ResetReassignIssue" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.resetReassignIssue"></a>

```go
func ResetReassignIssue()
```

##### `ResetReassignMergeRequest` <a name="ResetReassignMergeRequest" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.resetReassignMergeRequest"></a>

```go
func ResetReassignMergeRequest()
```

##### `ResetReopenIssue` <a name="ResetReopenIssue" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.resetReopenIssue"></a>

```go
func ResetReopenIssue()
```

##### `ResetReopenMergeRequest` <a name="ResetReopenMergeRequest" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.resetReopenMergeRequest"></a>

```go
func ResetReopenMergeRequest()
```

##### `ResetSuccessPipeline` <a name="ResetSuccessPipeline" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.resetSuccessPipeline"></a>

```go
func ResetSuccessPipeline()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GlobalLevelNotifications resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/globallevelnotifications"

globallevelnotifications.GlobalLevelNotifications_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/globallevelnotifications"

globallevelnotifications.GlobalLevelNotifications_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/globallevelnotifications"

globallevelnotifications.GlobalLevelNotifications_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/globallevelnotifications"

globallevelnotifications.GlobalLevelNotifications_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GlobalLevelNotifications resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GlobalLevelNotifications to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GlobalLevelNotifications that should be imported.

Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.0/docs/resources/global_level_notifications#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GlobalLevelNotifications to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.closeIssueInput">CloseIssueInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.closeMergeRequestInput">CloseMergeRequestInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.failedPipelineInput">FailedPipelineInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.fixedPipelineInput">FixedPipelineInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.issueDueInput">IssueDueInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.levelInput">LevelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.mergeMergeRequestInput">MergeMergeRequestInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.mergeWhenPipelineSucceedsInput">MergeWhenPipelineSucceedsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.movedProjectInput">MovedProjectInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.newIssueInput">NewIssueInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.newMergeRequestInput">NewMergeRequestInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.newNoteInput">NewNoteInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.pushToMergeRequestInput">PushToMergeRequestInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.reassignIssueInput">ReassignIssueInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.reassignMergeRequestInput">ReassignMergeRequestInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.reopenIssueInput">ReopenIssueInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.reopenMergeRequestInput">ReopenMergeRequestInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.successPipelineInput">SuccessPipelineInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.closeIssue">CloseIssue</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.closeMergeRequest">CloseMergeRequest</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.failedPipeline">FailedPipeline</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.fixedPipeline">FixedPipeline</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.issueDue">IssueDue</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.level">Level</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.mergeMergeRequest">MergeMergeRequest</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.mergeWhenPipelineSucceeds">MergeWhenPipelineSucceeds</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.movedProject">MovedProject</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.newIssue">NewIssue</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.newMergeRequest">NewMergeRequest</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.newNote">NewNote</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.pushToMergeRequest">PushToMergeRequest</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.reassignIssue">ReassignIssue</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.reassignMergeRequest">ReassignMergeRequest</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.reopenIssue">ReopenIssue</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.reopenMergeRequest">ReopenMergeRequest</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.successPipeline">SuccessPipeline</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `CloseIssueInput`<sup>Optional</sup> <a name="CloseIssueInput" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.closeIssueInput"></a>

```go
func CloseIssueInput() interface{}
```

- *Type:* interface{}

---

##### `CloseMergeRequestInput`<sup>Optional</sup> <a name="CloseMergeRequestInput" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.closeMergeRequestInput"></a>

```go
func CloseMergeRequestInput() interface{}
```

- *Type:* interface{}

---

##### `FailedPipelineInput`<sup>Optional</sup> <a name="FailedPipelineInput" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.failedPipelineInput"></a>

```go
func FailedPipelineInput() interface{}
```

- *Type:* interface{}

---

##### `FixedPipelineInput`<sup>Optional</sup> <a name="FixedPipelineInput" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.fixedPipelineInput"></a>

```go
func FixedPipelineInput() interface{}
```

- *Type:* interface{}

---

##### `IssueDueInput`<sup>Optional</sup> <a name="IssueDueInput" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.issueDueInput"></a>

```go
func IssueDueInput() interface{}
```

- *Type:* interface{}

---

##### `LevelInput`<sup>Optional</sup> <a name="LevelInput" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.levelInput"></a>

```go
func LevelInput() *string
```

- *Type:* *string

---

##### `MergeMergeRequestInput`<sup>Optional</sup> <a name="MergeMergeRequestInput" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.mergeMergeRequestInput"></a>

```go
func MergeMergeRequestInput() interface{}
```

- *Type:* interface{}

---

##### `MergeWhenPipelineSucceedsInput`<sup>Optional</sup> <a name="MergeWhenPipelineSucceedsInput" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.mergeWhenPipelineSucceedsInput"></a>

```go
func MergeWhenPipelineSucceedsInput() interface{}
```

- *Type:* interface{}

---

##### `MovedProjectInput`<sup>Optional</sup> <a name="MovedProjectInput" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.movedProjectInput"></a>

```go
func MovedProjectInput() interface{}
```

- *Type:* interface{}

---

##### `NewIssueInput`<sup>Optional</sup> <a name="NewIssueInput" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.newIssueInput"></a>

```go
func NewIssueInput() interface{}
```

- *Type:* interface{}

---

##### `NewMergeRequestInput`<sup>Optional</sup> <a name="NewMergeRequestInput" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.newMergeRequestInput"></a>

```go
func NewMergeRequestInput() interface{}
```

- *Type:* interface{}

---

##### `NewNoteInput`<sup>Optional</sup> <a name="NewNoteInput" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.newNoteInput"></a>

```go
func NewNoteInput() interface{}
```

- *Type:* interface{}

---

##### `PushToMergeRequestInput`<sup>Optional</sup> <a name="PushToMergeRequestInput" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.pushToMergeRequestInput"></a>

```go
func PushToMergeRequestInput() interface{}
```

- *Type:* interface{}

---

##### `ReassignIssueInput`<sup>Optional</sup> <a name="ReassignIssueInput" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.reassignIssueInput"></a>

```go
func ReassignIssueInput() interface{}
```

- *Type:* interface{}

---

##### `ReassignMergeRequestInput`<sup>Optional</sup> <a name="ReassignMergeRequestInput" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.reassignMergeRequestInput"></a>

```go
func ReassignMergeRequestInput() interface{}
```

- *Type:* interface{}

---

##### `ReopenIssueInput`<sup>Optional</sup> <a name="ReopenIssueInput" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.reopenIssueInput"></a>

```go
func ReopenIssueInput() interface{}
```

- *Type:* interface{}

---

##### `ReopenMergeRequestInput`<sup>Optional</sup> <a name="ReopenMergeRequestInput" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.reopenMergeRequestInput"></a>

```go
func ReopenMergeRequestInput() interface{}
```

- *Type:* interface{}

---

##### `SuccessPipelineInput`<sup>Optional</sup> <a name="SuccessPipelineInput" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.successPipelineInput"></a>

```go
func SuccessPipelineInput() interface{}
```

- *Type:* interface{}

---

##### `CloseIssue`<sup>Required</sup> <a name="CloseIssue" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.closeIssue"></a>

```go
func CloseIssue() interface{}
```

- *Type:* interface{}

---

##### `CloseMergeRequest`<sup>Required</sup> <a name="CloseMergeRequest" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.closeMergeRequest"></a>

```go
func CloseMergeRequest() interface{}
```

- *Type:* interface{}

---

##### `FailedPipeline`<sup>Required</sup> <a name="FailedPipeline" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.failedPipeline"></a>

```go
func FailedPipeline() interface{}
```

- *Type:* interface{}

---

##### `FixedPipeline`<sup>Required</sup> <a name="FixedPipeline" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.fixedPipeline"></a>

```go
func FixedPipeline() interface{}
```

- *Type:* interface{}

---

##### `IssueDue`<sup>Required</sup> <a name="IssueDue" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.issueDue"></a>

```go
func IssueDue() interface{}
```

- *Type:* interface{}

---

##### `Level`<sup>Required</sup> <a name="Level" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.level"></a>

```go
func Level() *string
```

- *Type:* *string

---

##### `MergeMergeRequest`<sup>Required</sup> <a name="MergeMergeRequest" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.mergeMergeRequest"></a>

```go
func MergeMergeRequest() interface{}
```

- *Type:* interface{}

---

##### `MergeWhenPipelineSucceeds`<sup>Required</sup> <a name="MergeWhenPipelineSucceeds" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.mergeWhenPipelineSucceeds"></a>

```go
func MergeWhenPipelineSucceeds() interface{}
```

- *Type:* interface{}

---

##### `MovedProject`<sup>Required</sup> <a name="MovedProject" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.movedProject"></a>

```go
func MovedProject() interface{}
```

- *Type:* interface{}

---

##### `NewIssue`<sup>Required</sup> <a name="NewIssue" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.newIssue"></a>

```go
func NewIssue() interface{}
```

- *Type:* interface{}

---

##### `NewMergeRequest`<sup>Required</sup> <a name="NewMergeRequest" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.newMergeRequest"></a>

```go
func NewMergeRequest() interface{}
```

- *Type:* interface{}

---

##### `NewNote`<sup>Required</sup> <a name="NewNote" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.newNote"></a>

```go
func NewNote() interface{}
```

- *Type:* interface{}

---

##### `PushToMergeRequest`<sup>Required</sup> <a name="PushToMergeRequest" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.pushToMergeRequest"></a>

```go
func PushToMergeRequest() interface{}
```

- *Type:* interface{}

---

##### `ReassignIssue`<sup>Required</sup> <a name="ReassignIssue" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.reassignIssue"></a>

```go
func ReassignIssue() interface{}
```

- *Type:* interface{}

---

##### `ReassignMergeRequest`<sup>Required</sup> <a name="ReassignMergeRequest" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.reassignMergeRequest"></a>

```go
func ReassignMergeRequest() interface{}
```

- *Type:* interface{}

---

##### `ReopenIssue`<sup>Required</sup> <a name="ReopenIssue" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.reopenIssue"></a>

```go
func ReopenIssue() interface{}
```

- *Type:* interface{}

---

##### `ReopenMergeRequest`<sup>Required</sup> <a name="ReopenMergeRequest" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.reopenMergeRequest"></a>

```go
func ReopenMergeRequest() interface{}
```

- *Type:* interface{}

---

##### `SuccessPipeline`<sup>Required</sup> <a name="SuccessPipeline" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.successPipeline"></a>

```go
func SuccessPipeline() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GlobalLevelNotificationsConfig <a name="GlobalLevelNotificationsConfig" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotificationsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotificationsConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/globallevelnotifications"

&globallevelnotifications.GlobalLevelNotificationsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CloseIssue: interface{},
	CloseMergeRequest: interface{},
	FailedPipeline: interface{},
	FixedPipeline: interface{},
	IssueDue: interface{},
	Level: *string,
	MergeMergeRequest: interface{},
	MergeWhenPipelineSucceeds: interface{},
	MovedProject: interface{},
	NewIssue: interface{},
	NewMergeRequest: interface{},
	NewNote: interface{},
	PushToMergeRequest: interface{},
	ReassignIssue: interface{},
	ReassignMergeRequest: interface{},
	ReopenIssue: interface{},
	ReopenMergeRequest: interface{},
	SuccessPipeline: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotificationsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotificationsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotificationsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotificationsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotificationsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotificationsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotificationsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotificationsConfig.property.closeIssue">CloseIssue</a></code> | <code>interface{}</code> | Enable notifications for closed issues. Can only be used when `level` is `custom`. |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotificationsConfig.property.closeMergeRequest">CloseMergeRequest</a></code> | <code>interface{}</code> | Enable notifications for closed merge requests. Can only be used when `level` is `custom`. |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotificationsConfig.property.failedPipeline">FailedPipeline</a></code> | <code>interface{}</code> | Enable notifications for failed pipelines. Can only be used when `level` is `custom`. |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotificationsConfig.property.fixedPipeline">FixedPipeline</a></code> | <code>interface{}</code> | Enable notifications for fixed pipelines. Can only be used when `level` is `custom`. |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotificationsConfig.property.issueDue">IssueDue</a></code> | <code>interface{}</code> | Enable notifications for due issues. Can only be used when `level` is `custom`. |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotificationsConfig.property.level">Level</a></code> | <code>*string</code> | The level of the notification. Valid values are: `disabled`, `participating`, `watch`, `global`, `mention`, `custom`. |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotificationsConfig.property.mergeMergeRequest">MergeMergeRequest</a></code> | <code>interface{}</code> | Enable notifications for merged merge requests. Can only be used when `level` is `custom`. |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotificationsConfig.property.mergeWhenPipelineSucceeds">MergeWhenPipelineSucceeds</a></code> | <code>interface{}</code> | Enable notifications for merged merge requests when the pipeline succeeds. Can only be used when `level` is `custom`. |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotificationsConfig.property.movedProject">MovedProject</a></code> | <code>interface{}</code> | Enable notifications for moved projects. Can only be used when `level` is `custom`. |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotificationsConfig.property.newIssue">NewIssue</a></code> | <code>interface{}</code> | Enable notifications for new issues. Can only be used when `level` is `custom`. |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotificationsConfig.property.newMergeRequest">NewMergeRequest</a></code> | <code>interface{}</code> | Enable notifications for new merge requests. Can only be used when `level` is `custom`. |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotificationsConfig.property.newNote">NewNote</a></code> | <code>interface{}</code> | Enable notifications for new notes on merge requests. Can only be used when `level` is `custom`. |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotificationsConfig.property.pushToMergeRequest">PushToMergeRequest</a></code> | <code>interface{}</code> | Enable notifications for push to merge request branches. Can only be used when `level` is `custom`. |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotificationsConfig.property.reassignIssue">ReassignIssue</a></code> | <code>interface{}</code> | Enable notifications for issue reassignments. Can only be used when `level` is `custom`. |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotificationsConfig.property.reassignMergeRequest">ReassignMergeRequest</a></code> | <code>interface{}</code> | Enable notifications for merge request reassignments. Can only be used when `level` is `custom`. |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotificationsConfig.property.reopenIssue">ReopenIssue</a></code> | <code>interface{}</code> | Enable notifications for reopened issues. Can only be used when `level` is `custom`. |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotificationsConfig.property.reopenMergeRequest">ReopenMergeRequest</a></code> | <code>interface{}</code> | Enable notifications for reopened merge requests. Can only be used when `level` is `custom`. |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotificationsConfig.property.successPipeline">SuccessPipeline</a></code> | <code>interface{}</code> | Enable notifications for successful pipelines. Can only be used when `level` is `custom`. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotificationsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotificationsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotificationsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotificationsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotificationsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotificationsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotificationsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CloseIssue`<sup>Optional</sup> <a name="CloseIssue" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotificationsConfig.property.closeIssue"></a>

```go
CloseIssue interface{}
```

- *Type:* interface{}

Enable notifications for closed issues. Can only be used when `level` is `custom`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.0/docs/resources/global_level_notifications#close_issue GlobalLevelNotifications#close_issue}

---

##### `CloseMergeRequest`<sup>Optional</sup> <a name="CloseMergeRequest" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotificationsConfig.property.closeMergeRequest"></a>

```go
CloseMergeRequest interface{}
```

- *Type:* interface{}

Enable notifications for closed merge requests. Can only be used when `level` is `custom`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.0/docs/resources/global_level_notifications#close_merge_request GlobalLevelNotifications#close_merge_request}

---

##### `FailedPipeline`<sup>Optional</sup> <a name="FailedPipeline" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotificationsConfig.property.failedPipeline"></a>

```go
FailedPipeline interface{}
```

- *Type:* interface{}

Enable notifications for failed pipelines. Can only be used when `level` is `custom`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.0/docs/resources/global_level_notifications#failed_pipeline GlobalLevelNotifications#failed_pipeline}

---

##### `FixedPipeline`<sup>Optional</sup> <a name="FixedPipeline" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotificationsConfig.property.fixedPipeline"></a>

```go
FixedPipeline interface{}
```

- *Type:* interface{}

Enable notifications for fixed pipelines. Can only be used when `level` is `custom`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.0/docs/resources/global_level_notifications#fixed_pipeline GlobalLevelNotifications#fixed_pipeline}

---

##### `IssueDue`<sup>Optional</sup> <a name="IssueDue" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotificationsConfig.property.issueDue"></a>

```go
IssueDue interface{}
```

- *Type:* interface{}

Enable notifications for due issues. Can only be used when `level` is `custom`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.0/docs/resources/global_level_notifications#issue_due GlobalLevelNotifications#issue_due}

---

##### `Level`<sup>Optional</sup> <a name="Level" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotificationsConfig.property.level"></a>

```go
Level *string
```

- *Type:* *string

The level of the notification. Valid values are: `disabled`, `participating`, `watch`, `global`, `mention`, `custom`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.0/docs/resources/global_level_notifications#level GlobalLevelNotifications#level}

---

##### `MergeMergeRequest`<sup>Optional</sup> <a name="MergeMergeRequest" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotificationsConfig.property.mergeMergeRequest"></a>

```go
MergeMergeRequest interface{}
```

- *Type:* interface{}

Enable notifications for merged merge requests. Can only be used when `level` is `custom`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.0/docs/resources/global_level_notifications#merge_merge_request GlobalLevelNotifications#merge_merge_request}

---

##### `MergeWhenPipelineSucceeds`<sup>Optional</sup> <a name="MergeWhenPipelineSucceeds" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotificationsConfig.property.mergeWhenPipelineSucceeds"></a>

```go
MergeWhenPipelineSucceeds interface{}
```

- *Type:* interface{}

Enable notifications for merged merge requests when the pipeline succeeds. Can only be used when `level` is `custom`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.0/docs/resources/global_level_notifications#merge_when_pipeline_succeeds GlobalLevelNotifications#merge_when_pipeline_succeeds}

---

##### `MovedProject`<sup>Optional</sup> <a name="MovedProject" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotificationsConfig.property.movedProject"></a>

```go
MovedProject interface{}
```

- *Type:* interface{}

Enable notifications for moved projects. Can only be used when `level` is `custom`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.0/docs/resources/global_level_notifications#moved_project GlobalLevelNotifications#moved_project}

---

##### `NewIssue`<sup>Optional</sup> <a name="NewIssue" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotificationsConfig.property.newIssue"></a>

```go
NewIssue interface{}
```

- *Type:* interface{}

Enable notifications for new issues. Can only be used when `level` is `custom`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.0/docs/resources/global_level_notifications#new_issue GlobalLevelNotifications#new_issue}

---

##### `NewMergeRequest`<sup>Optional</sup> <a name="NewMergeRequest" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotificationsConfig.property.newMergeRequest"></a>

```go
NewMergeRequest interface{}
```

- *Type:* interface{}

Enable notifications for new merge requests. Can only be used when `level` is `custom`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.0/docs/resources/global_level_notifications#new_merge_request GlobalLevelNotifications#new_merge_request}

---

##### `NewNote`<sup>Optional</sup> <a name="NewNote" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotificationsConfig.property.newNote"></a>

```go
NewNote interface{}
```

- *Type:* interface{}

Enable notifications for new notes on merge requests. Can only be used when `level` is `custom`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.0/docs/resources/global_level_notifications#new_note GlobalLevelNotifications#new_note}

---

##### `PushToMergeRequest`<sup>Optional</sup> <a name="PushToMergeRequest" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotificationsConfig.property.pushToMergeRequest"></a>

```go
PushToMergeRequest interface{}
```

- *Type:* interface{}

Enable notifications for push to merge request branches. Can only be used when `level` is `custom`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.0/docs/resources/global_level_notifications#push_to_merge_request GlobalLevelNotifications#push_to_merge_request}

---

##### `ReassignIssue`<sup>Optional</sup> <a name="ReassignIssue" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotificationsConfig.property.reassignIssue"></a>

```go
ReassignIssue interface{}
```

- *Type:* interface{}

Enable notifications for issue reassignments. Can only be used when `level` is `custom`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.0/docs/resources/global_level_notifications#reassign_issue GlobalLevelNotifications#reassign_issue}

---

##### `ReassignMergeRequest`<sup>Optional</sup> <a name="ReassignMergeRequest" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotificationsConfig.property.reassignMergeRequest"></a>

```go
ReassignMergeRequest interface{}
```

- *Type:* interface{}

Enable notifications for merge request reassignments. Can only be used when `level` is `custom`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.0/docs/resources/global_level_notifications#reassign_merge_request GlobalLevelNotifications#reassign_merge_request}

---

##### `ReopenIssue`<sup>Optional</sup> <a name="ReopenIssue" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotificationsConfig.property.reopenIssue"></a>

```go
ReopenIssue interface{}
```

- *Type:* interface{}

Enable notifications for reopened issues. Can only be used when `level` is `custom`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.0/docs/resources/global_level_notifications#reopen_issue GlobalLevelNotifications#reopen_issue}

---

##### `ReopenMergeRequest`<sup>Optional</sup> <a name="ReopenMergeRequest" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotificationsConfig.property.reopenMergeRequest"></a>

```go
ReopenMergeRequest interface{}
```

- *Type:* interface{}

Enable notifications for reopened merge requests. Can only be used when `level` is `custom`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.0/docs/resources/global_level_notifications#reopen_merge_request GlobalLevelNotifications#reopen_merge_request}

---

##### `SuccessPipeline`<sup>Optional</sup> <a name="SuccessPipeline" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotificationsConfig.property.successPipeline"></a>

```go
SuccessPipeline interface{}
```

- *Type:* interface{}

Enable notifications for successful pipelines. Can only be used when `level` is `custom`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.0/docs/resources/global_level_notifications#success_pipeline GlobalLevelNotifications#success_pipeline}

---



