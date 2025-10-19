# `globalLevelNotifications` Submodule <a name="`globalLevelNotifications` Submodule" id="@cdktf/provider-gitlab.globalLevelNotifications"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GlobalLevelNotifications <a name="GlobalLevelNotifications" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.5.0/docs/resources/global_level_notifications gitlab_global_level_notifications}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.Initializer"></a>

```typescript
import { globalLevelNotifications } from '@cdktf/provider-gitlab'

new globalLevelNotifications.GlobalLevelNotifications(scope: Construct, id: string, config?: GlobalLevelNotificationsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotificationsConfig">GlobalLevelNotificationsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotificationsConfig">GlobalLevelNotificationsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.resetCloseIssue">resetCloseIssue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.resetCloseMergeRequest">resetCloseMergeRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.resetFailedPipeline">resetFailedPipeline</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.resetFixedPipeline">resetFixedPipeline</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.resetIssueDue">resetIssueDue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.resetLevel">resetLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.resetMergeMergeRequest">resetMergeMergeRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.resetMergeWhenPipelineSucceeds">resetMergeWhenPipelineSucceeds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.resetMovedProject">resetMovedProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.resetNewIssue">resetNewIssue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.resetNewMergeRequest">resetNewMergeRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.resetNewNote">resetNewNote</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.resetPushToMergeRequest">resetPushToMergeRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.resetReassignIssue">resetReassignIssue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.resetReassignMergeRequest">resetReassignMergeRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.resetReopenIssue">resetReopenIssue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.resetReopenMergeRequest">resetReopenMergeRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.resetSuccessPipeline">resetSuccessPipeline</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetCloseIssue` <a name="resetCloseIssue" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.resetCloseIssue"></a>

```typescript
public resetCloseIssue(): void
```

##### `resetCloseMergeRequest` <a name="resetCloseMergeRequest" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.resetCloseMergeRequest"></a>

```typescript
public resetCloseMergeRequest(): void
```

##### `resetFailedPipeline` <a name="resetFailedPipeline" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.resetFailedPipeline"></a>

```typescript
public resetFailedPipeline(): void
```

##### `resetFixedPipeline` <a name="resetFixedPipeline" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.resetFixedPipeline"></a>

```typescript
public resetFixedPipeline(): void
```

##### `resetIssueDue` <a name="resetIssueDue" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.resetIssueDue"></a>

```typescript
public resetIssueDue(): void
```

##### `resetLevel` <a name="resetLevel" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.resetLevel"></a>

```typescript
public resetLevel(): void
```

##### `resetMergeMergeRequest` <a name="resetMergeMergeRequest" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.resetMergeMergeRequest"></a>

```typescript
public resetMergeMergeRequest(): void
```

##### `resetMergeWhenPipelineSucceeds` <a name="resetMergeWhenPipelineSucceeds" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.resetMergeWhenPipelineSucceeds"></a>

```typescript
public resetMergeWhenPipelineSucceeds(): void
```

##### `resetMovedProject` <a name="resetMovedProject" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.resetMovedProject"></a>

```typescript
public resetMovedProject(): void
```

##### `resetNewIssue` <a name="resetNewIssue" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.resetNewIssue"></a>

```typescript
public resetNewIssue(): void
```

##### `resetNewMergeRequest` <a name="resetNewMergeRequest" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.resetNewMergeRequest"></a>

```typescript
public resetNewMergeRequest(): void
```

##### `resetNewNote` <a name="resetNewNote" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.resetNewNote"></a>

```typescript
public resetNewNote(): void
```

##### `resetPushToMergeRequest` <a name="resetPushToMergeRequest" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.resetPushToMergeRequest"></a>

```typescript
public resetPushToMergeRequest(): void
```

##### `resetReassignIssue` <a name="resetReassignIssue" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.resetReassignIssue"></a>

```typescript
public resetReassignIssue(): void
```

##### `resetReassignMergeRequest` <a name="resetReassignMergeRequest" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.resetReassignMergeRequest"></a>

```typescript
public resetReassignMergeRequest(): void
```

##### `resetReopenIssue` <a name="resetReopenIssue" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.resetReopenIssue"></a>

```typescript
public resetReopenIssue(): void
```

##### `resetReopenMergeRequest` <a name="resetReopenMergeRequest" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.resetReopenMergeRequest"></a>

```typescript
public resetReopenMergeRequest(): void
```

##### `resetSuccessPipeline` <a name="resetSuccessPipeline" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.resetSuccessPipeline"></a>

```typescript
public resetSuccessPipeline(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GlobalLevelNotifications resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.isConstruct"></a>

```typescript
import { globalLevelNotifications } from '@cdktf/provider-gitlab'

globalLevelNotifications.GlobalLevelNotifications.isConstruct(x: any)
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

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.isTerraformElement"></a>

```typescript
import { globalLevelNotifications } from '@cdktf/provider-gitlab'

globalLevelNotifications.GlobalLevelNotifications.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.isTerraformResource"></a>

```typescript
import { globalLevelNotifications } from '@cdktf/provider-gitlab'

globalLevelNotifications.GlobalLevelNotifications.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.generateConfigForImport"></a>

```typescript
import { globalLevelNotifications } from '@cdktf/provider-gitlab'

globalLevelNotifications.GlobalLevelNotifications.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GlobalLevelNotifications resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GlobalLevelNotifications to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GlobalLevelNotifications that should be imported.

Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.5.0/docs/resources/global_level_notifications#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GlobalLevelNotifications to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.closeIssueInput">closeIssueInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.closeMergeRequestInput">closeMergeRequestInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.failedPipelineInput">failedPipelineInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.fixedPipelineInput">fixedPipelineInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.issueDueInput">issueDueInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.levelInput">levelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.mergeMergeRequestInput">mergeMergeRequestInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.mergeWhenPipelineSucceedsInput">mergeWhenPipelineSucceedsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.movedProjectInput">movedProjectInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.newIssueInput">newIssueInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.newMergeRequestInput">newMergeRequestInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.newNoteInput">newNoteInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.pushToMergeRequestInput">pushToMergeRequestInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.reassignIssueInput">reassignIssueInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.reassignMergeRequestInput">reassignMergeRequestInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.reopenIssueInput">reopenIssueInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.reopenMergeRequestInput">reopenMergeRequestInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.successPipelineInput">successPipelineInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.closeIssue">closeIssue</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.closeMergeRequest">closeMergeRequest</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.failedPipeline">failedPipeline</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.fixedPipeline">fixedPipeline</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.issueDue">issueDue</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.level">level</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.mergeMergeRequest">mergeMergeRequest</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.mergeWhenPipelineSucceeds">mergeWhenPipelineSucceeds</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.movedProject">movedProject</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.newIssue">newIssue</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.newMergeRequest">newMergeRequest</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.newNote">newNote</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.pushToMergeRequest">pushToMergeRequest</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.reassignIssue">reassignIssue</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.reassignMergeRequest">reassignMergeRequest</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.reopenIssue">reopenIssue</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.reopenMergeRequest">reopenMergeRequest</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.successPipeline">successPipeline</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `closeIssueInput`<sup>Optional</sup> <a name="closeIssueInput" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.closeIssueInput"></a>

```typescript
public readonly closeIssueInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `closeMergeRequestInput`<sup>Optional</sup> <a name="closeMergeRequestInput" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.closeMergeRequestInput"></a>

```typescript
public readonly closeMergeRequestInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `failedPipelineInput`<sup>Optional</sup> <a name="failedPipelineInput" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.failedPipelineInput"></a>

```typescript
public readonly failedPipelineInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `fixedPipelineInput`<sup>Optional</sup> <a name="fixedPipelineInput" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.fixedPipelineInput"></a>

```typescript
public readonly fixedPipelineInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `issueDueInput`<sup>Optional</sup> <a name="issueDueInput" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.issueDueInput"></a>

```typescript
public readonly issueDueInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `levelInput`<sup>Optional</sup> <a name="levelInput" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.levelInput"></a>

```typescript
public readonly levelInput: string;
```

- *Type:* string

---

##### `mergeMergeRequestInput`<sup>Optional</sup> <a name="mergeMergeRequestInput" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.mergeMergeRequestInput"></a>

```typescript
public readonly mergeMergeRequestInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `mergeWhenPipelineSucceedsInput`<sup>Optional</sup> <a name="mergeWhenPipelineSucceedsInput" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.mergeWhenPipelineSucceedsInput"></a>

```typescript
public readonly mergeWhenPipelineSucceedsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `movedProjectInput`<sup>Optional</sup> <a name="movedProjectInput" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.movedProjectInput"></a>

```typescript
public readonly movedProjectInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `newIssueInput`<sup>Optional</sup> <a name="newIssueInput" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.newIssueInput"></a>

```typescript
public readonly newIssueInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `newMergeRequestInput`<sup>Optional</sup> <a name="newMergeRequestInput" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.newMergeRequestInput"></a>

```typescript
public readonly newMergeRequestInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `newNoteInput`<sup>Optional</sup> <a name="newNoteInput" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.newNoteInput"></a>

```typescript
public readonly newNoteInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `pushToMergeRequestInput`<sup>Optional</sup> <a name="pushToMergeRequestInput" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.pushToMergeRequestInput"></a>

```typescript
public readonly pushToMergeRequestInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `reassignIssueInput`<sup>Optional</sup> <a name="reassignIssueInput" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.reassignIssueInput"></a>

```typescript
public readonly reassignIssueInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `reassignMergeRequestInput`<sup>Optional</sup> <a name="reassignMergeRequestInput" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.reassignMergeRequestInput"></a>

```typescript
public readonly reassignMergeRequestInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `reopenIssueInput`<sup>Optional</sup> <a name="reopenIssueInput" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.reopenIssueInput"></a>

```typescript
public readonly reopenIssueInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `reopenMergeRequestInput`<sup>Optional</sup> <a name="reopenMergeRequestInput" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.reopenMergeRequestInput"></a>

```typescript
public readonly reopenMergeRequestInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `successPipelineInput`<sup>Optional</sup> <a name="successPipelineInput" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.successPipelineInput"></a>

```typescript
public readonly successPipelineInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `closeIssue`<sup>Required</sup> <a name="closeIssue" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.closeIssue"></a>

```typescript
public readonly closeIssue: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `closeMergeRequest`<sup>Required</sup> <a name="closeMergeRequest" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.closeMergeRequest"></a>

```typescript
public readonly closeMergeRequest: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `failedPipeline`<sup>Required</sup> <a name="failedPipeline" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.failedPipeline"></a>

```typescript
public readonly failedPipeline: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `fixedPipeline`<sup>Required</sup> <a name="fixedPipeline" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.fixedPipeline"></a>

```typescript
public readonly fixedPipeline: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `issueDue`<sup>Required</sup> <a name="issueDue" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.issueDue"></a>

```typescript
public readonly issueDue: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `level`<sup>Required</sup> <a name="level" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.level"></a>

```typescript
public readonly level: string;
```

- *Type:* string

---

##### `mergeMergeRequest`<sup>Required</sup> <a name="mergeMergeRequest" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.mergeMergeRequest"></a>

```typescript
public readonly mergeMergeRequest: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `mergeWhenPipelineSucceeds`<sup>Required</sup> <a name="mergeWhenPipelineSucceeds" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.mergeWhenPipelineSucceeds"></a>

```typescript
public readonly mergeWhenPipelineSucceeds: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `movedProject`<sup>Required</sup> <a name="movedProject" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.movedProject"></a>

```typescript
public readonly movedProject: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `newIssue`<sup>Required</sup> <a name="newIssue" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.newIssue"></a>

```typescript
public readonly newIssue: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `newMergeRequest`<sup>Required</sup> <a name="newMergeRequest" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.newMergeRequest"></a>

```typescript
public readonly newMergeRequest: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `newNote`<sup>Required</sup> <a name="newNote" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.newNote"></a>

```typescript
public readonly newNote: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `pushToMergeRequest`<sup>Required</sup> <a name="pushToMergeRequest" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.pushToMergeRequest"></a>

```typescript
public readonly pushToMergeRequest: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `reassignIssue`<sup>Required</sup> <a name="reassignIssue" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.reassignIssue"></a>

```typescript
public readonly reassignIssue: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `reassignMergeRequest`<sup>Required</sup> <a name="reassignMergeRequest" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.reassignMergeRequest"></a>

```typescript
public readonly reassignMergeRequest: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `reopenIssue`<sup>Required</sup> <a name="reopenIssue" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.reopenIssue"></a>

```typescript
public readonly reopenIssue: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `reopenMergeRequest`<sup>Required</sup> <a name="reopenMergeRequest" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.reopenMergeRequest"></a>

```typescript
public readonly reopenMergeRequest: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `successPipeline`<sup>Required</sup> <a name="successPipeline" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.successPipeline"></a>

```typescript
public readonly successPipeline: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GlobalLevelNotificationsConfig <a name="GlobalLevelNotificationsConfig" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotificationsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotificationsConfig.Initializer"></a>

```typescript
import { globalLevelNotifications } from '@cdktf/provider-gitlab'

const globalLevelNotificationsConfig: globalLevelNotifications.GlobalLevelNotificationsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotificationsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotificationsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotificationsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotificationsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotificationsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotificationsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotificationsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotificationsConfig.property.closeIssue">closeIssue</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enable notifications for closed issues. Can only be used when `level` is `custom`. |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotificationsConfig.property.closeMergeRequest">closeMergeRequest</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enable notifications for closed merge requests. Can only be used when `level` is `custom`. |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotificationsConfig.property.failedPipeline">failedPipeline</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enable notifications for failed pipelines. Can only be used when `level` is `custom`. |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotificationsConfig.property.fixedPipeline">fixedPipeline</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enable notifications for fixed pipelines. Can only be used when `level` is `custom`. |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotificationsConfig.property.issueDue">issueDue</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enable notifications for due issues. Can only be used when `level` is `custom`. |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotificationsConfig.property.level">level</a></code> | <code>string</code> | The level of the notification. Valid values are: `disabled`, `participating`, `watch`, `global`, `mention`, `custom`. |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotificationsConfig.property.mergeMergeRequest">mergeMergeRequest</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enable notifications for merged merge requests. Can only be used when `level` is `custom`. |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotificationsConfig.property.mergeWhenPipelineSucceeds">mergeWhenPipelineSucceeds</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enable notifications for merged merge requests when the pipeline succeeds. Can only be used when `level` is `custom`. |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotificationsConfig.property.movedProject">movedProject</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enable notifications for moved projects. Can only be used when `level` is `custom`. |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotificationsConfig.property.newIssue">newIssue</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enable notifications for new issues. Can only be used when `level` is `custom`. |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotificationsConfig.property.newMergeRequest">newMergeRequest</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enable notifications for new merge requests. Can only be used when `level` is `custom`. |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotificationsConfig.property.newNote">newNote</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enable notifications for new notes on merge requests. Can only be used when `level` is `custom`. |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotificationsConfig.property.pushToMergeRequest">pushToMergeRequest</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enable notifications for push to merge request branches. Can only be used when `level` is `custom`. |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotificationsConfig.property.reassignIssue">reassignIssue</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enable notifications for issue reassignments. Can only be used when `level` is `custom`. |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotificationsConfig.property.reassignMergeRequest">reassignMergeRequest</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enable notifications for merge request reassignments. Can only be used when `level` is `custom`. |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotificationsConfig.property.reopenIssue">reopenIssue</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enable notifications for reopened issues. Can only be used when `level` is `custom`. |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotificationsConfig.property.reopenMergeRequest">reopenMergeRequest</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enable notifications for reopened merge requests. Can only be used when `level` is `custom`. |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotificationsConfig.property.successPipeline">successPipeline</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enable notifications for successful pipelines. Can only be used when `level` is `custom`. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotificationsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotificationsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotificationsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotificationsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotificationsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotificationsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotificationsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `closeIssue`<sup>Optional</sup> <a name="closeIssue" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotificationsConfig.property.closeIssue"></a>

```typescript
public readonly closeIssue: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enable notifications for closed issues. Can only be used when `level` is `custom`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.5.0/docs/resources/global_level_notifications#close_issue GlobalLevelNotifications#close_issue}

---

##### `closeMergeRequest`<sup>Optional</sup> <a name="closeMergeRequest" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotificationsConfig.property.closeMergeRequest"></a>

```typescript
public readonly closeMergeRequest: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enable notifications for closed merge requests. Can only be used when `level` is `custom`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.5.0/docs/resources/global_level_notifications#close_merge_request GlobalLevelNotifications#close_merge_request}

---

##### `failedPipeline`<sup>Optional</sup> <a name="failedPipeline" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotificationsConfig.property.failedPipeline"></a>

```typescript
public readonly failedPipeline: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enable notifications for failed pipelines. Can only be used when `level` is `custom`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.5.0/docs/resources/global_level_notifications#failed_pipeline GlobalLevelNotifications#failed_pipeline}

---

##### `fixedPipeline`<sup>Optional</sup> <a name="fixedPipeline" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotificationsConfig.property.fixedPipeline"></a>

```typescript
public readonly fixedPipeline: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enable notifications for fixed pipelines. Can only be used when `level` is `custom`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.5.0/docs/resources/global_level_notifications#fixed_pipeline GlobalLevelNotifications#fixed_pipeline}

---

##### `issueDue`<sup>Optional</sup> <a name="issueDue" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotificationsConfig.property.issueDue"></a>

```typescript
public readonly issueDue: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enable notifications for due issues. Can only be used when `level` is `custom`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.5.0/docs/resources/global_level_notifications#issue_due GlobalLevelNotifications#issue_due}

---

##### `level`<sup>Optional</sup> <a name="level" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotificationsConfig.property.level"></a>

```typescript
public readonly level: string;
```

- *Type:* string

The level of the notification. Valid values are: `disabled`, `participating`, `watch`, `global`, `mention`, `custom`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.5.0/docs/resources/global_level_notifications#level GlobalLevelNotifications#level}

---

##### `mergeMergeRequest`<sup>Optional</sup> <a name="mergeMergeRequest" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotificationsConfig.property.mergeMergeRequest"></a>

```typescript
public readonly mergeMergeRequest: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enable notifications for merged merge requests. Can only be used when `level` is `custom`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.5.0/docs/resources/global_level_notifications#merge_merge_request GlobalLevelNotifications#merge_merge_request}

---

##### `mergeWhenPipelineSucceeds`<sup>Optional</sup> <a name="mergeWhenPipelineSucceeds" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotificationsConfig.property.mergeWhenPipelineSucceeds"></a>

```typescript
public readonly mergeWhenPipelineSucceeds: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enable notifications for merged merge requests when the pipeline succeeds. Can only be used when `level` is `custom`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.5.0/docs/resources/global_level_notifications#merge_when_pipeline_succeeds GlobalLevelNotifications#merge_when_pipeline_succeeds}

---

##### `movedProject`<sup>Optional</sup> <a name="movedProject" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotificationsConfig.property.movedProject"></a>

```typescript
public readonly movedProject: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enable notifications for moved projects. Can only be used when `level` is `custom`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.5.0/docs/resources/global_level_notifications#moved_project GlobalLevelNotifications#moved_project}

---

##### `newIssue`<sup>Optional</sup> <a name="newIssue" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotificationsConfig.property.newIssue"></a>

```typescript
public readonly newIssue: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enable notifications for new issues. Can only be used when `level` is `custom`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.5.0/docs/resources/global_level_notifications#new_issue GlobalLevelNotifications#new_issue}

---

##### `newMergeRequest`<sup>Optional</sup> <a name="newMergeRequest" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotificationsConfig.property.newMergeRequest"></a>

```typescript
public readonly newMergeRequest: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enable notifications for new merge requests. Can only be used when `level` is `custom`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.5.0/docs/resources/global_level_notifications#new_merge_request GlobalLevelNotifications#new_merge_request}

---

##### `newNote`<sup>Optional</sup> <a name="newNote" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotificationsConfig.property.newNote"></a>

```typescript
public readonly newNote: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enable notifications for new notes on merge requests. Can only be used when `level` is `custom`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.5.0/docs/resources/global_level_notifications#new_note GlobalLevelNotifications#new_note}

---

##### `pushToMergeRequest`<sup>Optional</sup> <a name="pushToMergeRequest" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotificationsConfig.property.pushToMergeRequest"></a>

```typescript
public readonly pushToMergeRequest: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enable notifications for push to merge request branches. Can only be used when `level` is `custom`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.5.0/docs/resources/global_level_notifications#push_to_merge_request GlobalLevelNotifications#push_to_merge_request}

---

##### `reassignIssue`<sup>Optional</sup> <a name="reassignIssue" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotificationsConfig.property.reassignIssue"></a>

```typescript
public readonly reassignIssue: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enable notifications for issue reassignments. Can only be used when `level` is `custom`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.5.0/docs/resources/global_level_notifications#reassign_issue GlobalLevelNotifications#reassign_issue}

---

##### `reassignMergeRequest`<sup>Optional</sup> <a name="reassignMergeRequest" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotificationsConfig.property.reassignMergeRequest"></a>

```typescript
public readonly reassignMergeRequest: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enable notifications for merge request reassignments. Can only be used when `level` is `custom`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.5.0/docs/resources/global_level_notifications#reassign_merge_request GlobalLevelNotifications#reassign_merge_request}

---

##### `reopenIssue`<sup>Optional</sup> <a name="reopenIssue" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotificationsConfig.property.reopenIssue"></a>

```typescript
public readonly reopenIssue: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enable notifications for reopened issues. Can only be used when `level` is `custom`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.5.0/docs/resources/global_level_notifications#reopen_issue GlobalLevelNotifications#reopen_issue}

---

##### `reopenMergeRequest`<sup>Optional</sup> <a name="reopenMergeRequest" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotificationsConfig.property.reopenMergeRequest"></a>

```typescript
public readonly reopenMergeRequest: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enable notifications for reopened merge requests. Can only be used when `level` is `custom`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.5.0/docs/resources/global_level_notifications#reopen_merge_request GlobalLevelNotifications#reopen_merge_request}

---

##### `successPipeline`<sup>Optional</sup> <a name="successPipeline" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotificationsConfig.property.successPipeline"></a>

```typescript
public readonly successPipeline: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enable notifications for successful pipelines. Can only be used when `level` is `custom`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.5.0/docs/resources/global_level_notifications#success_pipeline GlobalLevelNotifications#success_pipeline}

---



