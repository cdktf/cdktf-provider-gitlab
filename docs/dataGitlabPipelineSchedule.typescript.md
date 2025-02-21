# `dataGitlabPipelineSchedule` Submodule <a name="`dataGitlabPipelineSchedule` Submodule" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGitlabPipelineSchedule <a name="DataGitlabPipelineSchedule" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.9.0/docs/data-sources/pipeline_schedule gitlab_pipeline_schedule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.Initializer"></a>

```typescript
import { dataGitlabPipelineSchedule } from '@cdktf/provider-gitlab'

new dataGitlabPipelineSchedule.DataGitlabPipelineSchedule(scope: Construct, id: string, config: DataGitlabPipelineScheduleConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleConfig">DataGitlabPipelineScheduleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleConfig">DataGitlabPipelineScheduleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.resetCronTimezone">resetCronTimezone</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetCronTimezone` <a name="resetCronTimezone" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.resetCronTimezone"></a>

```typescript
public resetCronTimezone(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataGitlabPipelineSchedule resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.isConstruct"></a>

```typescript
import { dataGitlabPipelineSchedule } from '@cdktf/provider-gitlab'

dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.isTerraformElement"></a>

```typescript
import { dataGitlabPipelineSchedule } from '@cdktf/provider-gitlab'

dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.isTerraformDataSource"></a>

```typescript
import { dataGitlabPipelineSchedule } from '@cdktf/provider-gitlab'

dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.generateConfigForImport"></a>

```typescript
import { dataGitlabPipelineSchedule } from '@cdktf/provider-gitlab'

dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataGitlabPipelineSchedule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGitlabPipelineSchedule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGitlabPipelineSchedule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.9.0/docs/data-sources/pipeline_schedule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataGitlabPipelineSchedule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.property.active">active</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.property.cron">cron</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.property.lastPipeline">lastPipeline</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleLastPipelineOutputReference">DataGitlabPipelineScheduleLastPipelineOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.property.nextRunAt">nextRunAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.property.owner">owner</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleOwnerOutputReference">DataGitlabPipelineScheduleOwnerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.property.ref">ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.property.variables">variables</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleVariablesList">DataGitlabPipelineScheduleVariablesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.property.cronTimezoneInput">cronTimezoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.property.pipelineScheduleIdInput">pipelineScheduleIdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.property.cronTimezone">cronTimezone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.property.pipelineScheduleId">pipelineScheduleId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `active`<sup>Required</sup> <a name="active" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.property.active"></a>

```typescript
public readonly active: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `cron`<sup>Required</sup> <a name="cron" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.property.cron"></a>

```typescript
public readonly cron: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `lastPipeline`<sup>Required</sup> <a name="lastPipeline" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.property.lastPipeline"></a>

```typescript
public readonly lastPipeline: DataGitlabPipelineScheduleLastPipelineOutputReference;
```

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleLastPipelineOutputReference">DataGitlabPipelineScheduleLastPipelineOutputReference</a>

---

##### `nextRunAt`<sup>Required</sup> <a name="nextRunAt" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.property.nextRunAt"></a>

```typescript
public readonly nextRunAt: string;
```

- *Type:* string

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.property.owner"></a>

```typescript
public readonly owner: DataGitlabPipelineScheduleOwnerOutputReference;
```

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleOwnerOutputReference">DataGitlabPipelineScheduleOwnerOutputReference</a>

---

##### `ref`<sup>Required</sup> <a name="ref" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.property.ref"></a>

```typescript
public readonly ref: string;
```

- *Type:* string

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `variables`<sup>Required</sup> <a name="variables" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.property.variables"></a>

```typescript
public readonly variables: DataGitlabPipelineScheduleVariablesList;
```

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleVariablesList">DataGitlabPipelineScheduleVariablesList</a>

---

##### `cronTimezoneInput`<sup>Optional</sup> <a name="cronTimezoneInput" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.property.cronTimezoneInput"></a>

```typescript
public readonly cronTimezoneInput: string;
```

- *Type:* string

---

##### `pipelineScheduleIdInput`<sup>Optional</sup> <a name="pipelineScheduleIdInput" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.property.pipelineScheduleIdInput"></a>

```typescript
public readonly pipelineScheduleIdInput: number;
```

- *Type:* number

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `cronTimezone`<sup>Required</sup> <a name="cronTimezone" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.property.cronTimezone"></a>

```typescript
public readonly cronTimezone: string;
```

- *Type:* string

---

##### `pipelineScheduleId`<sup>Required</sup> <a name="pipelineScheduleId" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.property.pipelineScheduleId"></a>

```typescript
public readonly pipelineScheduleId: number;
```

- *Type:* number

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGitlabPipelineScheduleConfig <a name="DataGitlabPipelineScheduleConfig" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleConfig.Initializer"></a>

```typescript
import { dataGitlabPipelineSchedule } from '@cdktf/provider-gitlab'

const dataGitlabPipelineScheduleConfig: dataGitlabPipelineSchedule.DataGitlabPipelineScheduleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleConfig.property.pipelineScheduleId">pipelineScheduleId</a></code> | <code>number</code> | The pipeline schedule id. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleConfig.property.project">project</a></code> | <code>string</code> | The name or id of the project to add the schedule to. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleConfig.property.cronTimezone">cronTimezone</a></code> | <code>string</code> | The timezone. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `pipelineScheduleId`<sup>Required</sup> <a name="pipelineScheduleId" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleConfig.property.pipelineScheduleId"></a>

```typescript
public readonly pipelineScheduleId: number;
```

- *Type:* number

The pipeline schedule id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.9.0/docs/data-sources/pipeline_schedule#pipeline_schedule_id DataGitlabPipelineSchedule#pipeline_schedule_id}

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

The name or id of the project to add the schedule to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.9.0/docs/data-sources/pipeline_schedule#project DataGitlabPipelineSchedule#project}

---

##### `cronTimezone`<sup>Optional</sup> <a name="cronTimezone" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleConfig.property.cronTimezone"></a>

```typescript
public readonly cronTimezone: string;
```

- *Type:* string

The timezone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.9.0/docs/data-sources/pipeline_schedule#cron_timezone DataGitlabPipelineSchedule#cron_timezone}

---

### DataGitlabPipelineScheduleLastPipeline <a name="DataGitlabPipelineScheduleLastPipeline" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleLastPipeline"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleLastPipeline.Initializer"></a>

```typescript
import { dataGitlabPipelineSchedule } from '@cdktf/provider-gitlab'

const dataGitlabPipelineScheduleLastPipeline: dataGitlabPipelineSchedule.DataGitlabPipelineScheduleLastPipeline = { ... }
```


### DataGitlabPipelineScheduleOwner <a name="DataGitlabPipelineScheduleOwner" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleOwner"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleOwner.Initializer"></a>

```typescript
import { dataGitlabPipelineSchedule } from '@cdktf/provider-gitlab'

const dataGitlabPipelineScheduleOwner: dataGitlabPipelineSchedule.DataGitlabPipelineScheduleOwner = { ... }
```


### DataGitlabPipelineScheduleVariables <a name="DataGitlabPipelineScheduleVariables" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleVariables"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleVariables.Initializer"></a>

```typescript
import { dataGitlabPipelineSchedule } from '@cdktf/provider-gitlab'

const dataGitlabPipelineScheduleVariables: dataGitlabPipelineSchedule.DataGitlabPipelineScheduleVariables = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataGitlabPipelineScheduleLastPipelineOutputReference <a name="DataGitlabPipelineScheduleLastPipelineOutputReference" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleLastPipelineOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleLastPipelineOutputReference.Initializer"></a>

```typescript
import { dataGitlabPipelineSchedule } from '@cdktf/provider-gitlab'

new dataGitlabPipelineSchedule.DataGitlabPipelineScheduleLastPipelineOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleLastPipelineOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleLastPipelineOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleLastPipelineOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleLastPipelineOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleLastPipelineOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleLastPipelineOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleLastPipelineOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleLastPipelineOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleLastPipelineOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleLastPipelineOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleLastPipelineOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleLastPipelineOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleLastPipelineOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleLastPipelineOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleLastPipelineOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleLastPipelineOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleLastPipelineOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleLastPipelineOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleLastPipelineOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleLastPipelineOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleLastPipelineOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleLastPipelineOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleLastPipelineOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleLastPipelineOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleLastPipelineOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleLastPipelineOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleLastPipelineOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleLastPipelineOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleLastPipelineOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleLastPipelineOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleLastPipelineOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleLastPipelineOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleLastPipelineOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleLastPipelineOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleLastPipelineOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleLastPipelineOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleLastPipelineOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleLastPipelineOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleLastPipelineOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleLastPipelineOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleLastPipelineOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleLastPipelineOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleLastPipelineOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleLastPipelineOutputReference.property.id">id</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleLastPipelineOutputReference.property.ref">ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleLastPipelineOutputReference.property.sha">sha</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleLastPipelineOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleLastPipelineOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleLastPipeline">DataGitlabPipelineScheduleLastPipeline</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleLastPipelineOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleLastPipelineOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleLastPipelineOutputReference.property.id"></a>

```typescript
public readonly id: number;
```

- *Type:* number

---

##### `ref`<sup>Required</sup> <a name="ref" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleLastPipelineOutputReference.property.ref"></a>

```typescript
public readonly ref: string;
```

- *Type:* string

---

##### `sha`<sup>Required</sup> <a name="sha" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleLastPipelineOutputReference.property.sha"></a>

```typescript
public readonly sha: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleLastPipelineOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleLastPipelineOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGitlabPipelineScheduleLastPipeline;
```

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleLastPipeline">DataGitlabPipelineScheduleLastPipeline</a>

---


### DataGitlabPipelineScheduleOwnerOutputReference <a name="DataGitlabPipelineScheduleOwnerOutputReference" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleOwnerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleOwnerOutputReference.Initializer"></a>

```typescript
import { dataGitlabPipelineSchedule } from '@cdktf/provider-gitlab'

new dataGitlabPipelineSchedule.DataGitlabPipelineScheduleOwnerOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleOwnerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleOwnerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleOwnerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleOwnerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleOwnerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleOwnerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleOwnerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleOwnerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleOwnerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleOwnerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleOwnerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleOwnerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleOwnerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleOwnerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleOwnerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleOwnerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleOwnerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleOwnerOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleOwnerOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleOwnerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleOwnerOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleOwnerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleOwnerOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleOwnerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleOwnerOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleOwnerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleOwnerOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleOwnerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleOwnerOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleOwnerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleOwnerOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleOwnerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleOwnerOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleOwnerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleOwnerOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleOwnerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleOwnerOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleOwnerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleOwnerOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleOwnerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleOwnerOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleOwnerOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleOwnerOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleOwnerOutputReference.property.avatarUrl">avatarUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleOwnerOutputReference.property.id">id</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleOwnerOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleOwnerOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleOwnerOutputReference.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleOwnerOutputReference.property.webUrl">webUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleOwnerOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleOwner">DataGitlabPipelineScheduleOwner</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleOwnerOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleOwnerOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `avatarUrl`<sup>Required</sup> <a name="avatarUrl" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleOwnerOutputReference.property.avatarUrl"></a>

```typescript
public readonly avatarUrl: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleOwnerOutputReference.property.id"></a>

```typescript
public readonly id: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleOwnerOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleOwnerOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleOwnerOutputReference.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `webUrl`<sup>Required</sup> <a name="webUrl" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleOwnerOutputReference.property.webUrl"></a>

```typescript
public readonly webUrl: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleOwnerOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGitlabPipelineScheduleOwner;
```

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleOwner">DataGitlabPipelineScheduleOwner</a>

---


### DataGitlabPipelineScheduleVariablesList <a name="DataGitlabPipelineScheduleVariablesList" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleVariablesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleVariablesList.Initializer"></a>

```typescript
import { dataGitlabPipelineSchedule } from '@cdktf/provider-gitlab'

new dataGitlabPipelineSchedule.DataGitlabPipelineScheduleVariablesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleVariablesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleVariablesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleVariablesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleVariablesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleVariablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleVariablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleVariablesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleVariablesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleVariablesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleVariablesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleVariablesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleVariablesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleVariablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleVariablesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleVariablesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleVariablesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleVariablesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleVariablesList.get"></a>

```typescript
public get(index: number): DataGitlabPipelineScheduleVariablesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleVariablesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleVariablesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleVariablesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleVariablesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleVariablesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGitlabPipelineScheduleVariablesOutputReference <a name="DataGitlabPipelineScheduleVariablesOutputReference" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleVariablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleVariablesOutputReference.Initializer"></a>

```typescript
import { dataGitlabPipelineSchedule } from '@cdktf/provider-gitlab'

new dataGitlabPipelineSchedule.DataGitlabPipelineScheduleVariablesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleVariablesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleVariablesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleVariablesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleVariablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleVariablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleVariablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleVariablesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleVariablesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleVariablesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleVariablesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleVariablesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleVariablesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleVariablesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleVariablesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleVariablesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleVariablesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleVariablesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleVariablesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleVariablesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleVariablesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleVariablesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleVariablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleVariablesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleVariablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleVariablesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleVariablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleVariablesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleVariablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleVariablesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleVariablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleVariablesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleVariablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleVariablesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleVariablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleVariablesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleVariablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleVariablesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleVariablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleVariablesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleVariablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleVariablesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleVariablesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleVariablesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleVariablesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleVariablesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleVariablesOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleVariablesOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleVariablesOutputReference.property.variableType">variableType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleVariablesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleVariables">DataGitlabPipelineScheduleVariables</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleVariablesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleVariablesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleVariablesOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleVariablesOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `variableType`<sup>Required</sup> <a name="variableType" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleVariablesOutputReference.property.variableType"></a>

```typescript
public readonly variableType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleVariablesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGitlabPipelineScheduleVariables;
```

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleVariables">DataGitlabPipelineScheduleVariables</a>

---



