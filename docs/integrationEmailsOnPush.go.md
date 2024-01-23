# `integrationEmailsOnPush` Submodule <a name="`integrationEmailsOnPush` Submodule" id="@cdktf/provider-gitlab.integrationEmailsOnPush"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IntegrationEmailsOnPush <a name="IntegrationEmailsOnPush" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.8.0/docs/resources/integration_emails_on_push gitlab_integration_emails_on_push}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/integrationemailsonpush"

integrationemailsonpush.NewIntegrationEmailsOnPush(scope Construct, id *string, config IntegrationEmailsOnPushConfig) IntegrationEmailsOnPush
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPushConfig">IntegrationEmailsOnPushConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPushConfig">IntegrationEmailsOnPushConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.resetBranchesToBeNotified">ResetBranchesToBeNotified</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.resetDisableDiffs">ResetDisableDiffs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.resetPushEvents">ResetPushEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.resetSendFromCommitterEmail">ResetSendFromCommitterEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.resetTagPushEvents">ResetTagPushEvents</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetBranchesToBeNotified` <a name="ResetBranchesToBeNotified" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.resetBranchesToBeNotified"></a>

```go
func ResetBranchesToBeNotified()
```

##### `ResetDisableDiffs` <a name="ResetDisableDiffs" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.resetDisableDiffs"></a>

```go
func ResetDisableDiffs()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.resetId"></a>

```go
func ResetId()
```

##### `ResetPushEvents` <a name="ResetPushEvents" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.resetPushEvents"></a>

```go
func ResetPushEvents()
```

##### `ResetSendFromCommitterEmail` <a name="ResetSendFromCommitterEmail" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.resetSendFromCommitterEmail"></a>

```go
func ResetSendFromCommitterEmail()
```

##### `ResetTagPushEvents` <a name="ResetTagPushEvents" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.resetTagPushEvents"></a>

```go
func ResetTagPushEvents()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a IntegrationEmailsOnPush resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/integrationemailsonpush"

integrationemailsonpush.IntegrationEmailsOnPush_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/integrationemailsonpush"

integrationemailsonpush.IntegrationEmailsOnPush_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/integrationemailsonpush"

integrationemailsonpush.IntegrationEmailsOnPush_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/integrationemailsonpush"

integrationemailsonpush.IntegrationEmailsOnPush_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a IntegrationEmailsOnPush resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the IntegrationEmailsOnPush to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing IntegrationEmailsOnPush that should be imported.

Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.8.0/docs/resources/integration_emails_on_push#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the IntegrationEmailsOnPush to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.property.active">Active</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.property.slug">Slug</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.property.title">Title</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.property.updatedAt">UpdatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.property.branchesToBeNotifiedInput">BranchesToBeNotifiedInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.property.disableDiffsInput">DisableDiffsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.property.pushEventsInput">PushEventsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.property.recipientsInput">RecipientsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.property.sendFromCommitterEmailInput">SendFromCommitterEmailInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.property.tagPushEventsInput">TagPushEventsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.property.branchesToBeNotified">BranchesToBeNotified</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.property.disableDiffs">DisableDiffs</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.property.pushEvents">PushEvents</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.property.recipients">Recipients</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.property.sendFromCommitterEmail">SendFromCommitterEmail</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.property.tagPushEvents">TagPushEvents</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Active`<sup>Required</sup> <a name="Active" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.property.active"></a>

```go
func Active() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `Slug`<sup>Required</sup> <a name="Slug" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.property.slug"></a>

```go
func Slug() *string
```

- *Type:* *string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.property.title"></a>

```go
func Title() *string
```

- *Type:* *string

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.property.updatedAt"></a>

```go
func UpdatedAt() *string
```

- *Type:* *string

---

##### `BranchesToBeNotifiedInput`<sup>Optional</sup> <a name="BranchesToBeNotifiedInput" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.property.branchesToBeNotifiedInput"></a>

```go
func BranchesToBeNotifiedInput() *string
```

- *Type:* *string

---

##### `DisableDiffsInput`<sup>Optional</sup> <a name="DisableDiffsInput" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.property.disableDiffsInput"></a>

```go
func DisableDiffsInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `PushEventsInput`<sup>Optional</sup> <a name="PushEventsInput" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.property.pushEventsInput"></a>

```go
func PushEventsInput() interface{}
```

- *Type:* interface{}

---

##### `RecipientsInput`<sup>Optional</sup> <a name="RecipientsInput" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.property.recipientsInput"></a>

```go
func RecipientsInput() *string
```

- *Type:* *string

---

##### `SendFromCommitterEmailInput`<sup>Optional</sup> <a name="SendFromCommitterEmailInput" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.property.sendFromCommitterEmailInput"></a>

```go
func SendFromCommitterEmailInput() interface{}
```

- *Type:* interface{}

---

##### `TagPushEventsInput`<sup>Optional</sup> <a name="TagPushEventsInput" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.property.tagPushEventsInput"></a>

```go
func TagPushEventsInput() interface{}
```

- *Type:* interface{}

---

##### `BranchesToBeNotified`<sup>Required</sup> <a name="BranchesToBeNotified" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.property.branchesToBeNotified"></a>

```go
func BranchesToBeNotified() *string
```

- *Type:* *string

---

##### `DisableDiffs`<sup>Required</sup> <a name="DisableDiffs" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.property.disableDiffs"></a>

```go
func DisableDiffs() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `PushEvents`<sup>Required</sup> <a name="PushEvents" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.property.pushEvents"></a>

```go
func PushEvents() interface{}
```

- *Type:* interface{}

---

##### `Recipients`<sup>Required</sup> <a name="Recipients" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.property.recipients"></a>

```go
func Recipients() *string
```

- *Type:* *string

---

##### `SendFromCommitterEmail`<sup>Required</sup> <a name="SendFromCommitterEmail" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.property.sendFromCommitterEmail"></a>

```go
func SendFromCommitterEmail() interface{}
```

- *Type:* interface{}

---

##### `TagPushEvents`<sup>Required</sup> <a name="TagPushEvents" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.property.tagPushEvents"></a>

```go
func TagPushEvents() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### IntegrationEmailsOnPushConfig <a name="IntegrationEmailsOnPushConfig" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPushConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPushConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/integrationemailsonpush"

&integrationemailsonpush.IntegrationEmailsOnPushConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Project: *string,
	Recipients: *string,
	BranchesToBeNotified: *string,
	DisableDiffs: interface{},
	Id: *string,
	PushEvents: interface{},
	SendFromCommitterEmail: interface{},
	TagPushEvents: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPushConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPushConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPushConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPushConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPushConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPushConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPushConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPushConfig.property.project">Project</a></code> | <code>*string</code> | ID or full-path of the project you want to activate integration on. |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPushConfig.property.recipients">Recipients</a></code> | <code>*string</code> | Emails separated by whitespace. |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPushConfig.property.branchesToBeNotified">BranchesToBeNotified</a></code> | <code>*string</code> | Branches to send notifications for. Valid options are `all`, `default`, `protected`, `default_and_protected`. Notifications are always fired for tag pushes. |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPushConfig.property.disableDiffs">DisableDiffs</a></code> | <code>interface{}</code> | Disable code diffs. |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPushConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.8.0/docs/resources/integration_emails_on_push#id IntegrationEmailsOnPush#id}. |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPushConfig.property.pushEvents">PushEvents</a></code> | <code>interface{}</code> | Enable notifications for push events. |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPushConfig.property.sendFromCommitterEmail">SendFromCommitterEmail</a></code> | <code>interface{}</code> | Send from committer. |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPushConfig.property.tagPushEvents">TagPushEvents</a></code> | <code>interface{}</code> | Enable notifications for tag push events. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPushConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPushConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPushConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPushConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPushConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPushConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPushConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPushConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

ID or full-path of the project you want to activate integration on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.8.0/docs/resources/integration_emails_on_push#project IntegrationEmailsOnPush#project}

---

##### `Recipients`<sup>Required</sup> <a name="Recipients" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPushConfig.property.recipients"></a>

```go
Recipients *string
```

- *Type:* *string

Emails separated by whitespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.8.0/docs/resources/integration_emails_on_push#recipients IntegrationEmailsOnPush#recipients}

---

##### `BranchesToBeNotified`<sup>Optional</sup> <a name="BranchesToBeNotified" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPushConfig.property.branchesToBeNotified"></a>

```go
BranchesToBeNotified *string
```

- *Type:* *string

Branches to send notifications for. Valid options are `all`, `default`, `protected`, `default_and_protected`. Notifications are always fired for tag pushes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.8.0/docs/resources/integration_emails_on_push#branches_to_be_notified IntegrationEmailsOnPush#branches_to_be_notified}

---

##### `DisableDiffs`<sup>Optional</sup> <a name="DisableDiffs" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPushConfig.property.disableDiffs"></a>

```go
DisableDiffs interface{}
```

- *Type:* interface{}

Disable code diffs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.8.0/docs/resources/integration_emails_on_push#disable_diffs IntegrationEmailsOnPush#disable_diffs}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPushConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.8.0/docs/resources/integration_emails_on_push#id IntegrationEmailsOnPush#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `PushEvents`<sup>Optional</sup> <a name="PushEvents" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPushConfig.property.pushEvents"></a>

```go
PushEvents interface{}
```

- *Type:* interface{}

Enable notifications for push events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.8.0/docs/resources/integration_emails_on_push#push_events IntegrationEmailsOnPush#push_events}

---

##### `SendFromCommitterEmail`<sup>Optional</sup> <a name="SendFromCommitterEmail" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPushConfig.property.sendFromCommitterEmail"></a>

```go
SendFromCommitterEmail interface{}
```

- *Type:* interface{}

Send from committer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.8.0/docs/resources/integration_emails_on_push#send_from_committer_email IntegrationEmailsOnPush#send_from_committer_email}

---

##### `TagPushEvents`<sup>Optional</sup> <a name="TagPushEvents" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPushConfig.property.tagPushEvents"></a>

```go
TagPushEvents interface{}
```

- *Type:* interface{}

Enable notifications for tag push events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.8.0/docs/resources/integration_emails_on_push#tag_push_events IntegrationEmailsOnPush#tag_push_events}

---



